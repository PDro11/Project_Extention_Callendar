import React from 'react';
import './Header.scss'; // Importa o SCSS do componente

interface HeaderProps {
    logoSrc: string; // Para a imagem do logo
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
    return (
        <header className="main-header">
            <div className="header-content">
                <img src={logoSrc} alt="Logo Secretaria Municipal da Educação de Bauru" className="logo-secretaria" />
                <div className="header-text">
                    <h1>O que um ano tem?</h1>
                    <p>Secretaria Municipal da Educação de Bauru</p>
                    <p className="tagline">Bauru em uma educação sem igual!</p>
                </div>
            </div>
        </header>
    );
};

export default Header; 