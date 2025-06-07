import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import MonthCard from '../../components/MonthCard/MonthCard';
import Modal from '../../components/Modal/Modal';
import './Home.scss'; // Importa o SCSS da página

// Dados para os eventos do modal (você pode expandir isso depois)
const eventData = {
    'assistente-social': {
        title: 'Assistente Social',
        date: '15 / Maio',
        whatIs: 'A profissão de Assistente Social desempenha um papel fundamental na elaboração e execução de políticas sociais que visam à inclusão e à justiça social, promovendo o bem-estar da comunidade.',
        whyIsImportant: 'Celebra os profissionais que atuam na promoção do bem-estar social, lutando pelos direitos humanos e por melhores condições de vida para grupos sociais vulneráveis, garantindo dignidade e acesso a direitos.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/' // Exemplo de link
    },
    'combate-abuso': {
        title: 'Combate ao Abuso e Exploração Infantil e Adolescentes',
        date: '18 / Maio',
        whatIs: 'O Dia Nacional de Combate ao Abuso e à Exploração Sexual de Crianças e Adolescentes é uma data para mobilizar a sociedade a se engajar na luta contra esse crime.',
        whyIsImportant: 'É crucial para conscientizar sobre a gravidade do problema e incentivar a denúncia, protegendo crianças e adolescentes e garantindo seu direito a um desenvolvimento seguro e saudável.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/' // Exemplo de link
    },
    'dia-mulher': {
        title: 'Dia Internacional da Mulher',
        date: '08 / Março',
        whatIs: 'O Dia Internacional da Mulher é uma data comemorativa que celebra as conquistas sociais, políticas e econômicas das mulheres ao longo da história.',
        whyIsImportant: 'É um dia para reforçar a luta por igualdade de direitos, contra a discriminação e a violência de gênero, e para reconhecer a importância das mulheres em todas as esferas da sociedade.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/' // Exemplo de link
    },
    // Adicione mais eventos conforme o Figma
};

interface EventDetail {
    title: string;
    date: string;
    whatIs: string;
    whyIsImportant: string;
    moreInfoLink?: string;
}

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<EventDetail | null>(null);

    const handleOpenModal = (eventType: string) => {
        setCurrentEvent(eventData[eventType as keyof typeof eventData] || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentEvent(null);
    };

    return (
        <div className="home-page">
            <Header logoSrc="/assets/images/logo-secretaria.png" /> {/* Caminho da imagem do logo */}

            <main className="main-content">
                <section className="current-month-section">
                    <div className="month-highlight">
                        <div className="month-title">MAIO</div>
                        <div className="event-details-container">
                            <div className="event-item" data-event="assistente-social" onClick={() => handleOpenModal('assistente-social')}>
                                <span className="event-name">Dia do Assistente Social</span>
                                <span className="event-date">15/05</span>
                                <img src="/assets/images/icone-assistente-social.png" alt="Ícone Assistente Social" className="event-icon" />
                            </div>
                            <div className="event-item" data-event="combate-abuso" onClick={() => handleOpenModal('combate-abuso')}>
                                <span className="event-name">Combate ao Abuso e Exploração</span>
                                <span className="event-date">18/05</span>
                                <img src="/assets/images/icone-flor-sorridente.png" alt="Ícone Flor Sorridente" className="event-icon" />
                                <span className="event-subtitle">Infantil e Adolescentes</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="months-grid-section">
                    <div className="months-grid">
                        <MonthCard monthName="JUNHO" iconSrc="/assets/images/icone-junho.png" description="Aventuras e Descobertas!" monthClass="month-june" />
                        <MonthCard monthName="JULHO" iconSrc="/assets/images/icone-julho.png" description="Tempo de Voo e Novas Melodias!" monthClass="month-july" />
                        <MonthCard monthName="AGOSTO" iconSrc="/assets/images/icone-agosto.png" description="Celebrando Conquistas e Novos Começos!" monthClass="month-august" />
                        <MonthCard monthName="SETEMBRO" iconSrc="/assets/images/icone-setembro.png" description="Inclusão e Valorização da Vida!" monthClass="month-september" />
                        <MonthCard monthName="OUTUBRO" iconSrc="/assets/images/icone-outubro.png" description="Saúde, Alegria e Crescimento!" monthClass="month-october" />
                        <MonthCard monthName="NOVEMBRO" iconSrc="/assets/images/icone-novembro.png" description="Resistência e Consciência!" monthClass="month-november" />
                        <MonthCard monthName="DEZEMBRO" iconSrc="/assets/images/icone-dezembro.png" description="Um Mundo de Conquistas e Esperança!" monthClass="month-december" />
                    </div>
                </section>

                <section className="previous-dates-section">
                    <h2 className="section-title">DATAS ANTERIORES</h2>
                    <div className="months-grid">
                        <MonthCard monthName="JANEIRO" iconSrc="/assets/images/icone-janeiro.png" description="Cores da Inclusão!" monthClass="month-january" />
                        <MonthCard monthName="FEVEREIRO" iconSrc="/assets/images/icone-fevereiro.png" description="Amor e Equidade!" monthClass="month-february" />
                        <MonthCard monthName="MARÇO" iconSrc="/assets/images/icone-marco.png" description="Mulheres que Inspiram!" monthClass="month-march" onClick={() => handleOpenModal('dia-mulher')} />
                        <MonthCard monthName="ABRIL" iconSrc="/assets/images/icone-abril.png" description="O Lar que Abriga o Saber!" monthClass="month-april" />
                    </div>
                </section>
            </main>

            {currentEvent && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={currentEvent.title}
                    date={currentEvent.date}
                    whatIs={currentEvent.whatIs}
                    whyIsImportant={currentEvent.whyIsImportant}
                    moreInfoLink={currentEvent.moreInfoLink}
                />
            )}
        </div>
    );
};

export default Home; 