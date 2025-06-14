import { useState } from 'react'; // useEffect ainda é útil para side-effects não relacionados a dados
import { useQuery } from '@tanstack/react-query'; // Importamos useQuery
import Header from '../../components/Header/Header';
import MonthCard from '../../components/MonthCard/MonthCard';
import Modal from '../../components/Modal/Modal';
import EventCarousel from '../../components/EventCarousel/EventCarousel';
// Importe as interfaces e funções de API
import { fetchAllMonthHeaders, fetchEventsByMonth } from '../../api/events'; // Ajuste o caminho se seu 'api' está em index.ts
import type { Event } from '../../interfaces/event.interface'; // Caminho local
import type { MonthHeader } from '../../interfaces/monthHeader.interface'; // Caminho local

import './Home.scss';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
    
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

    const currentMonthNumber = getCurrentMonth();
    const currentMonthName = getMonthName(currentMonthNumber);

    const { 
        data: currentMonthEvents = [], // Renomeia 'data' para 'currentMonthEvents' e define default vazio
        isLoading: isLoadingEvents, // Flag de carregamento para eventos
        isError: isErrorEvents, // Flag de erro para eventos
        error: eventsError // Objeto de erro
    } = useQuery<Event[], Error>({ // Define os tipos de sucesso e erro
        queryKey: ['events', currentMonthName], // Chave única para esta consulta (eventos do mês atual)
        queryFn: () => fetchEventsByMonth(currentMonthName), // Função que realiza a chamada de API
        staleTime: 5 * 60 * 1000, // Dados considerados "fresh" por 5 minutos antes de serem refetch automaticamente
        // Adicione outras opções conforme necessidade, como refetchOnWindowFocus, retry, etc.
    });

    const { 
        data: allMonthHeaders = [], // Renomeia 'data' para 'allMonthHeaders' e define default vazio
        isLoading: isLoadingHeaders, // Flag de carregamento para cabeçalhos
        isError: isErrorHeaders, // Flag de erro para cabeçalhos
        error: headersError // Objeto de erro
    } = useQuery<MonthHeader[], Error>({ // Define os tipos de sucesso e erro
        queryKey: ['monthHeaders'], // Chave única para esta consulta (todos os cabeçalhos de meses)
        queryFn: fetchAllMonthHeaders, // Função que realiza a chamada de API
        staleTime: Infinity, // Cabeçalhos de mês provavelmente não mudam com frequência, então podem ser "stale" indefinidamente até uma invalidação manual
    });

    // Encontra o cabeçalho do mês atual, agora usando os dados de useQuery
    const currentMonthHeader = allMonthHeaders.find(month => month.id === currentMonthNumber);

    // Filtra os meses com base nos cabeçalhos carregados
    const futureMonths = allMonthHeaders.filter(month => month.id >= currentMonthNumber);
    const pastMonths = allMonthHeaders.filter(month => month.id < currentMonthNumber);

    if (isLoadingEvents || isLoadingHeaders) {
        return (
            <div className="home-page">
                <Header logoSrc="/assets/images/logo-secretaria.png" />
                <main className="main-content">
                    <p>Carregando dados do calendário...</p>
                </main>
            </div>
        );
    }

    if (isErrorEvents || isErrorHeaders) {
        return (
            <div className="home-page">
                <Header logoSrc="/assets/images/logo-secretaria.png" />
                <main className="main-content">
                    <p>Ocorreu um erro ao carregar os dados do calendário.</p>
                    {eventsError && <p>Erro Eventos: {eventsError.message}</p>}
                    {headersError && <p>Erro Cabeçalhos: {headersError.message}</p>}
                </main>
            </div>
        );
    }

    // Funções de manipulação de modal (permanecem as mesmas)
    const handleOpenModal = (event: Event) => {
        setCurrentEvent(event);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentEvent(null);
    };

    return (
        <div className="home-page">
            <Header logoSrc="/assets/images/logo-secretaria.png" />

            <main className="main-content">
                {/* Seção do mês atual com título */}
                <section className="current-month-section">
                    <h2 className="section-title">
                        {currentMonthHeader?.name.toUpperCase() || getMonthName(currentMonthNumber).toUpperCase()} - {currentMonthHeader?.theme || 'Mês atual'}
                    </h2>
                </section>
                
                {/* Carrossel de eventos em seção separada para ocupar mais espaço */}
                <EventCarousel 
                    events={currentMonthEvents} 
                    onEventClick={handleOpenModal} 
                    monthName={currentMonthHeader?.name || getMonthName(currentMonthNumber)}
                />

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