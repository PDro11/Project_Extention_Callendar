import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Event } from '../data/eventsData';
import { eventsData } from '../data/eventsData';
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';
import './MonthDetailsPage.scss';

const MonthDetailsPage: React.FC = () => {
    // Estados para controlar o modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    // Obter o nome do mês da URL
    const { monthName } = useParams<{ monthName: string }>();

    // Formatar o nome do mês para exibição (primeira letra maiúscula)
    const formattedMonthName = monthName ? 
        monthName.charAt(0).toUpperCase() + monthName.slice(1) : '';

    // Filtrar eventos do mês atual
    const monthEvents = eventsData.filter(event => 
        event.month.toLowerCase() === monthName?.toLowerCase()
    );

    // Função para abrir o modal com o evento selecionado
    const handleOpenModal = (event: Event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    return (
        <div className="month-details-page">
            <Header logoSrc="/assets/images/logo-secretaria.svg" />
            
            <div className="container">
                <div className="back-button-container">
                    <Link to="/" className="back-button">
                        ← Voltar
                    </Link>
                </div>

                <h1>Eventos de {formattedMonthName}</h1>

                {monthEvents.length > 0 ? (
                    <div className="events-list">
                        {monthEvents.map(event => (
                            <div 
                                key={event.id}
                                className="event-item"
                                onClick={() => handleOpenModal(event)}
                            >
                                <div className="event-date">
                                    {event.day.toString().padStart(2, '0')}/{
                                        monthName ? monthName.charAt(0).toUpperCase() + monthName.substring(1, 3) : ''
                                    }
                                </div>
                                <div className="event-title">{event.title}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-events-message">
                        Não há eventos cadastrados para este mês.
                    </p>
                )}
            </div>

            {selectedEvent && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={selectedEvent.title}
                    date={selectedEvent.details}
                    whatIs={selectedEvent.whatIs || ''}
                    whyIsImportant={selectedEvent.whyIsImportant || ''}
                    moreInfoLink={selectedEvent.moreInfoLink}
                />
            )}
        </div>
    );
};

export default MonthDetailsPage; 