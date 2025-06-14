import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home/Home';
import MonthDetailsPage from './pages/MonthDetailsPage';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:monthName" element={<MonthDetailsPage />} />
            </Routes>
        </QueryClientProvider>
    );
};

export default App;