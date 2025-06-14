import { Request, Response } from 'express';
import { EventService } from '../services/event.service';
import { Event } from '../interfaces/event.interface';

/**
 * @class EventController
 * @description Classe responsável por lidar com as requisições HTTP relacionadas a eventos.
 * Segue o princípio da Responsabilidade Única (SRP) e Inversão de Dependência (DIP).
 */
export class EventController {
  private eventService: EventService;

  constructor(eventService: EventService = new EventService()) {
    this.eventService = eventService;
  }

  /**
   * @method getAllEvents
   * @description Retorna todos os eventos ou eventos filtrados por mês via query param.
   * @param req Requisição Express (com params.id ou query.month).
   * @param res Resposta Express.
   */
  async getAllEvents(req: Request, res: Response): Promise<void> {
    try {
      const { month } = req.query; // Captura o parâmetro 'month' da query
      let events: Event[];

      if (month && typeof month === 'string') {
        // Se 'month' for fornecido, filtra por mês
        events = await this.eventService.getEventsByMonth(month);
      } else {
        // Caso contrário, retorna todos os eventos
        events = await this.eventService.getAllEvents();
      }
      
      res.status(200).json(events);
    } catch (error: any) {
      console.error('Error in getAllEvents (with/without month filter):', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  /**
   * @method getEventById
   * @description Retorna um evento pelo ID.
   * @param req Requisição Express (com params.id).
   * @param res Resposta Express.
   */
  async getEventById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const event = await this.eventService.getEventById(id);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error: any) {
      console.error('Error in getEventById:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  /**
   * @method createEvent
   * @description Cria um novo evento.
   * @param req Requisição Express (com body do evento).
   * @param res Resposta Express.
   */
  async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const newEventData: Omit<Event, 'id'> = req.body;
      const createdEvent = await this.eventService.createNewEvent(newEventData);
      if (createdEvent) {
        res.status(201).json(createdEvent);
      } else {
        res.status(400).json({ message: 'Failed to create event' });
      }
    } catch (error: any) {
      console.error('Error in createEvent:', error.message);
      if (error.message.includes('required')) { // Exemplo de tratamento de validação de serviço
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  /**
   * @method updateEvent
   * @description Atualiza um evento existente.
   * @param req Requisição Express (com params.id e body do evento).
   * @param res Resposta Express.
   */
  async updateEvent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedEventData: Partial<Event> = req.body;
      const updatedEvent = await this.eventService.updateExistingEvent(id, updatedEventData);
      if (updatedEvent) {
        res.status(200).json(updatedEvent);
      } else {
        res.status(404).json({ message: 'Event not found or failed to update' });
      }
    } catch (error: any) {
      console.error('Error in updateEvent:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  /**
   * @method deleteEvent
   * @description Deleta um evento.
   * @param req Requisição Express (com params.id).
   * @param res Resposta Express.
   */
  async deleteEvent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const success = await this.eventService.deleteExistingEvent(id);
      if (success) {
        res.status(204).send(); // No Content
      } else {
        res.status(404).json({ message: 'Event not found or failed to delete' });
      }
    } catch (error: any) {
      console.error('Error in deleteEvent:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}