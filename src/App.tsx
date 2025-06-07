import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import JunhoPage from './pages/JunhoPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/junho" element={<JunhoPage />} />
        </Routes>
    );
};

export default App;
