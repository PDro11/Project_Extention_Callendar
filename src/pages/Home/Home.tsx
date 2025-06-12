import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import MonthCard from '../../components/MonthCard/MonthCard';
import Modal from '../../components/Modal/Modal';
import EventCarousel from '../../components/EventCarousel/EventCarousel';
import { eventsData, type Event } from '../../data/eventsData';
import { monthHeadersData } from '../../data/monthHeadersData';
import './Home.scss'; // Importa o SCSS da página

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
    const [currentMonthEvents, setCurrentMonthEvents] = useState<Event[]>([]);
    
    // Função para obter o mês atual (1-12)
    const getCurrentMonth = () => {
        const date = new Date();
        return date.getMonth() + 1; // Janeiro é 0, então adicionamos 1
    };

    // Função para obter o nome do mês em português
    const getMonthName = (monthNumber: number) => {
        const months = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];
        return months[monthNumber - 1];
    };

    // Obtém eventos do mês atual
    useEffect(() => {
        const currentMonthNumber = getCurrentMonth();
        const currentMonthName = getMonthName(currentMonthNumber);
        
        const filteredEvents = eventsData.filter(
            event => event.month.toLowerCase() === currentMonthName
        );
        
        setCurrentMonthEvents(filteredEvents);
    }, []);

    // Manipulação de abertura do modal
    const handleOpenModal = (event: Event) => {
        setCurrentEvent(event);
        setIsModalOpen(true);
    };

    // Manipulação de fechamento do modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentEvent(null);
    };

    // Separar meses em atuais e anteriores
    const currentMonth = getCurrentMonth();
    
    const futureMonths = monthHeadersData.filter(month => month.id >= currentMonth);
    const pastMonths = monthHeadersData.filter(month => month.id < currentMonth);

    return (
        <div className="home-page">
            <Header logoSrc="/assets/images/logo-secretaria.svg" />

            <main className="main-content">
                {/* Seção do carrossel de eventos do mês atual */}
                <section className="current-month-section">
                    <h2 className="section-title">
                        {getMonthName(currentMonth).toUpperCase()} - {monthHeadersData[currentMonth - 1]?.theme}
                    </h2>
                    <EventCarousel 
                        events={currentMonthEvents} 
                        onEventClick={handleOpenModal} 
                    />
                </section>

                {/* Grade de meses futuros */}
                <section className="months-grid-section">
                    <div className="months-grid">
                        {futureMonths.map(month => (
                            <MonthCard
                                key={month.id}
                                monthName={month.name.toUpperCase()}
                                iconSrc={month.illustrationUrl}
                                description={month.theme}
                                monthClass={month.colorClass}
                            />
                        ))}
                    </div>
                </section>

                {/* Seção de datas anteriores */}
                <section className="previous-dates-section">
                    <h2 className="section-title">DATAS ANTERIORES</h2>
                    <div className="months-grid">
                        {pastMonths.map(month => (
                            <MonthCard
                                key={month.id}
                                monthName={month.name.toUpperCase()}
                                iconSrc={month.illustrationUrl}
                                description={month.theme}
                                monthClass={month.colorClass}
                            />
                        ))}
                    </div>
                </section>
            </main>

            {currentEvent && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={currentEvent.title}
                    date={currentEvent.details}
                    whatIs={currentEvent.whatIs || ''}
                    whyIsImportant={currentEvent.whyIsImportant || ''}
                    moreInfoLink={currentEvent.moreInfoLink}
                />
            )}
        </div>
    );
};

export default Home; 