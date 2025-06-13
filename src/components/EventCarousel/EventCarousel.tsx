import { useState, useEffect } from 'react';
import type { Event } from '../../data/eventsData';
import './EventCarousel.scss';

interface EventCarouselProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  monthName?: string; // Adicionado para usar cores específicas do mês
}

const EventCarousel = ({ events, onEventClick, monthName = 'june' }: EventCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avança para o próximo slide automaticamente a cada 5 segundos
  useEffect(() => {
    if (events.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length]);

  // Funções para navegação manual
  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  // Função para ir diretamente para um slide específico
  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  // Função para obter uma classe de estilo com base no tipo de evento
  const getEventTypeClass = (eventType: string = '') => {
    if (eventType.toLowerCase().includes('meio ambiente')) return 'event-environmental';
    if (eventType.toLowerCase().includes('cultura')) return 'event-cultural';
    if (eventType.toLowerCase().includes('educação')) return 'event-educational';
    if (eventType.toLowerCase().includes('saúde')) return 'event-health';
    if (eventType.toLowerCase().includes('direitos')) return 'event-rights';
    return 'event-default';
  };

  // Função para formatar a data do evento
  const formatEventDate = (date: string) => {
    if (!date) return '';
    return date;
  };

  // Função para lidar com o clique no título ou na linha
  const handleTitleClick = (event: Event, e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que o evento se propague para o card
    onEventClick(event);
  };

  return (
    <div className="event-carousel">
      {events.length > 0 ? (
        <>
          <div className="carousel-container">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <div className={`event-card ${getEventTypeClass(event.type)} month-${monthName}`}>
                  <div className="event-content">
                    <h2 
                      className="event-title" 
                      onClick={(e) => handleTitleClick(event, e)}
                      title="Clique para mais informações"
                    >
                      {event.title}
                    </h2>
                    <p className="event-description">{event.details}</p>
                    <div className="event-meta">
                      <span className="event-date">{formatEventDate(event.date)}</span>
                      {event.location && <span className="event-location">{event.location}</span>}
                    </div>
                  </div>
                  <div 
                    className="hover-overlay" 
                    onClick={() => onEventClick(event)}
                  >
                    <span>Quer saber mais?</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de navegação posicionados nas laterais */}
          <button 
            className="control-button prev" 
            onClick={goToPrev} 
            aria-label="Anterior"
            title="Slide anterior"
          >
            &#10094;
          </button>
          
          <button 
            className="control-button next" 
            onClick={goToNext} 
            aria-label="Próximo"
            title="Próximo slide"
          >
            &#10095;
          </button>

          {/* Indicadores na parte inferior */}
          <div className="carousel-controls">
            <div className="carousel-indicators">
              {events.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={(e) => goToSlide(index, e)}
                  aria-label={`Ir para o slide ${index + 1}`}
                  title={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="no-events">Nenhum evento encontrado para o mês atual</div>
      )}
    </div>
  );
};

export default EventCarousel; 