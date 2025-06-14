import { Router } from 'express';
import { EventController } from '../controllers/event.controller';

/**
 * @class EventRoutes
 * @description Classe que define as rotas da API para eventos.
 * Segue o princípio da Inversão de Dependência (DIP) ao receber o controlador.
 */
export class EventRoutes {
  public router: Router;
  private eventController: EventController;

  constructor(eventController: EventController = new EventController()) {
    this.router = Router();
    this.eventController = eventController;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Rotas de CRUD para eventos
    this.router.get('/', this.eventController.getAllEvents.bind(this.eventController));
    this.router.get('/:id', this.eventController.getEventById.bind(this.eventController));
    this.router.post('/', this.eventController.createEvent.bind(this.eventController));
    this.router.put('/:id', this.eventController.updateEvent.bind(this.eventController));
    this.router.delete('/:id', this.eventController.deleteEvent.bind(this.eventController));
  }
}