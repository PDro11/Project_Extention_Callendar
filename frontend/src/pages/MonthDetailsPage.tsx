// frontend/src/pages/MonthDetailsPage.tsx
import React, { useState } from 'react'; // Não precisamos mais de useEffect
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'; // Importe useQuery
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';
// Importe as interfaces e funções de API
import { fetchEventsByMonth } from '../api/events'; // Ajuste o caminho se seu 'api' está em index.ts
import type { Event } from '../interfaces/event.interface';
import './MonthDetailsPage.scss';

const MonthDetailsPage: React.FC = () => {
    // Estados para controlar o modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    // Não precisamos mais do useState para monthEvents, useQuery cuidará disso
    // const [monthEvents, setMonthEvents] = useState<Event[]>([]);

    // Obter o nome do mês da URL
    const { monthName } = useParams<{ monthName: string }>();

    // Formatar o nome do mês para exibição (primeira letra maiúscula)
    const formattedMonthName = monthName ? 
        monthName.charAt(0).toUpperCase() + monthName.slice(1) : '';

    // ***************************************************************
    // USANDO useQuery PARA BUSCAR EVENTOS DO MÊS ESPECÍFICO
    // ***************************************************************
    const { 
        data: monthEvents = [], // Renomeia 'data' para 'monthEvents' e define default vazio
        isLoading: isLoadingMonthEvents, // Flag de carregamento
        isError: isErrorMonthEvents, // Flag de erro
        error: monthEventsError // Objeto de erro
    } = useQuery<Event[], Error>({
        // A queryKey usa o monthName. Quando monthName muda, a query é automaticamente refetch.
        queryKey: ['events', monthName || ''], // Use um valor padrão para queryKey se monthName for undefined
        queryFn: () => {
            if (!monthName) {
                // Se monthName não existir (URL inválida ou ainda não carregada),
                // retorne uma Promise vazia ou lance um erro para evitar a chamada API.
                return Promise.resolve([]); 
            }
            return fetchEventsByMonth(monthName);
        },
        enabled: !!monthName, // A query só é habilitada se monthName tiver um valor válido
        staleTime: 5 * 60 * 1000, // Dados considerados "fresh" por 5 minutos
        // Adicione outras opções conforme necessidade (ex: retry, keepPreviousData)
    });

    // ***************************************************************
    // TRATAMENTO DE ESTADOS DE CARREGAMENTO E ERRO
    // ***************************************************************
    if (isLoadingMonthEvents) {
        return (
            <div className="month-details-page">
                <Header logoSrc="/assets/images/logo-secretaria.png" />
                <div className="container">
                    <p>Carregando eventos de {formattedMonthName}...</p>
                </div>
            </div>
        );
    }

    if (isErrorMonthEvents) {
        return (
            <div className="month-details-page">
                <Header logoSrc="/assets/images/logo-secretaria.png" />
                <div className="container">
                    <p>Ocorreu um erro ao carregar os eventos de {formattedMonthName}.</p>
                    {monthEventsError && <p>Erro: {monthEventsError.message}</p>}
                </div>
            </div>
        );
    }

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
            <Header logoSrc="/assets/images/logo-secretaria.png" />
            
            <div className="container">
                <div className="back-button-container">
                    <Link to="/" className="back-button">
                        ← Voltar
                    </Link>
                </div>

                <h1>Eventos de {formattedMonthName}</h1>

                {/* Agora usamos monthEvents diretamente do useQuery */}
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
                                        // Garante que o monthName exista e tem pelo menos 3 caracteres
                                        formattedMonthName ? formattedMonthName.substring(0, 3).toUpperCase() : ''
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