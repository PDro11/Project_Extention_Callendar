import React from 'react';
import './MonthCard.scss'; // Importa o SCSS do componente

interface MonthCardProps {
    monthName: string;
    iconSrc: string; // Para o ícone do mês
    description?: string; // Opcional
    monthClass: string; // Classe para a cor específica do mês (ex: 'month-june')
    onClick?: () => void; // Para lidar com cliques
}

const MonthCard: React.FC<MonthCardProps> = ({ monthName, iconSrc, description, monthClass, onClick }) => {
    return (
        <div className={`month-card ${monthClass}`} onClick={onClick}>
            <h3>{monthName}</h3>
            <img src={iconSrc} alt={`Ícone ${monthName}`} />
            {description && <span className="month-description">{description}</span>}
        </div>
    );
};

export default MonthCard; 