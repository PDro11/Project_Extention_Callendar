import React from 'react';
import { Link } from 'react-router-dom';
import './MonthCard.scss'; // Importa o SCSS do componente

interface MonthCardProps {
    monthName: string;
    iconSrc: string; // Para o ícone do mês
    description?: string; // Opcional
    monthClass: string; // Classe para a cor específica do mês (ex: 'month-june')
    onClick?: () => void; // Para lidar com cliques
}

const MonthCard: React.FC<MonthCardProps> = ({ monthName, iconSrc, description, monthClass, onClick }) => {
    // Controle de erro para imagens inexistentes
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const target = event.target as HTMLImageElement;
        target.src = '/images/months/placeholder.svg'; // Imagem de fallback
    };

    return (
        <Link to={`/${monthName.toLowerCase()}`}>
            <div className={`month-card ${monthClass}`} onClick={onClick}>
                <h3>{monthName}</h3>
                <img 
                    src={iconSrc} 
                    alt={`Ícone ${monthName}`} 
                    onError={handleImageError}
                />
                {description && <span className="month-description">{description}</span>}
            </div>
        </Link>
    );
};

export default MonthCard; 