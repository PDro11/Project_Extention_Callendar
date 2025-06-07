import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthDetailsPage from './pages/MonthDetailsPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:monthName" element={<MonthDetailsPage />} />
        </Routes>
    );
};

export default App;
