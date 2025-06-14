import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { EventRoutes } from './routes/event.routes';
import { MonthHeaderRoutes } from './routes/monthHeader.routes'; // Importe as novas rotas

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const eventRoutes = new EventRoutes();
app.use('/api/events', eventRoutes.router);

const monthHeaderRoutes = new MonthHeaderRoutes(); // Instancie as novas rotas
app.use('/api/month-headers', monthHeaderRoutes.router); // Adicione o novo endpoint

// Rota de saúde (health check)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;