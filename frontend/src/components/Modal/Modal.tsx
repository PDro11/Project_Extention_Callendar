import React from 'react';
import './Modal.scss'; // Importa o SCSS do componente

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    date: string;
    whatIs: string;
    whyIsImportant: string;
    moreInfoLink?: string; // Opcional
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, date, whatIs, whyIsImportant, moreInfoLink }) => {
    if (!isOpen) return null; // Não renderiza se não estiver aberto

    return (
        <div className="modal-container" onClick={onClose}> {/* Fecha clicando fora */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Impede que clique no conteúdo feche o modal */}
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                </div>
                <div className="modal-body">
                    <p className="modal-question">O que é essa data?</p>
                    <p>{whatIs}</p>
                    <p className="modal-question">Por que ela é importante?</p>
                    <p>{whyIsImportant}</p>
                </div>
                {moreInfoLink && (
                    <div className="modal-action">
                        <a href={moreInfoLink} target="_blank" rel="noopener noreferrer">Quer saber mais?</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal; 