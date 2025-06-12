import { useState, useEffect } from 'react';
import type { Event } from '../../data/eventsData';
import './EventCarousel.scss';

interface EventCarouselProps {
  events: Event[];
  onEventClick: (event: Event) => void;
}

const EventCarousel = ({ events, onEventClick }: EventCarouselProps) => {
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
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  // Controle de erro para imagens inexistentes
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.src = '/images/events/placeholder.svg'; // Imagem de fallback
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
                onClick={() => onEventClick(event)}
              >
                <div className="event-image-container">
                  <img 
                    src={`/images/events/${event.id}.svg`} 
                    alt={event.title} 
                    className="event-image"
                    onError={handleImageError}
                  />
                  <div className="event-info">
                    <h2>{event.title}</h2>
                    <p>{event.details}</p>
                  </div>
                  <div className="hover-overlay">
                    <span>Quer saber mais?</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {events.length > 1 && (
            <div className="carousel-controls">
              <button className="control-button prev" onClick={goToPrev} aria-label="Anterior">
                &#10094;
              </button>
              <div className="carousel-indicators">
                {events.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ir para o slide ${index + 1}`}
                  />
                ))}
              </div>
              <button className="control-button next" onClick={goToNext} aria-label="Próximo">
                &#10095;
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="no-events">Nenhum evento encontrado para o mês atual</div>
      )}
    </div>
  );
};

export default EventCarousel; 