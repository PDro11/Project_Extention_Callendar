import { EventModel } from '../models/event.model';
import { Event } from '../interfaces/event.interface';

/**
 * @class EventService
 * @description Classe que contém a lógica de negócios para manipulação de eventos.
 * Segue o princípio da Responsabilidade Única (SRP) e Inversão de Dependência (DIP)
 * ao depender da abstração do modelo (ou da instância concreta do modelo).
 */
export class EventService {
  private eventModel: EventModel;

  constructor(eventModel: EventModel = new EventModel()) {
    this.eventModel = eventModel;
  }

  /**
   * Obtém todos os eventos.
   * @returns Promise<Event[]> Uma lista de eventos.
   */
  async getAllEvents(): Promise<Event[]> {
    const events = await this.eventModel.findAllEvents();
    return events || [];
  }

  /**
   * Obtém um evento pelo ID.
   * @param id O ID do evento.
   * @returns Promise<Event | null> O evento encontrado ou null se não existir.
   */
  async getEventById(id: string): Promise<Event | null> {
    return this.eventModel.findEventById(id);
  }

  /**
   * Cria um novo evento.
   * @param event Os dados do evento a ser criado.
   * @returns Promise<Event | null> O evento criado ou null em caso de falha.
   */
  async createNewEvent(event: Omit<Event, 'id'>): Promise<Event | null> {
    // Adicione validações de negócio aqui, se necessário
    if (!event.title || !event.month || !event.day) {
      throw new Error('Title, month, and day are required for a new event.');
    }
    return this.eventModel.createEvent(event);
  }

  /**
   * Atualiza um evento existente.
   * @param id O ID do evento a ser atualizado.
   * @param event Os dados do evento para atualização.
   * @returns Promise<Event | null> O evento atualizado ou null se não existir ou em caso de falha.
   */
  async updateExistingEvent(id: string, event: Partial<Event>): Promise<Event | null> {
    const existingEvent = await this.eventModel.findEventById(id);
    if (!existingEvent) {
      return null; // Evento não encontrado
    }
    return this.eventModel.updateEvent(id, event);
  }

  /**
   * Deleta um evento.
   * @param id O ID do evento a ser deletado.
   * @returns Promise<boolean> True se o evento foi deletado com sucesso, false caso contrário.
   */
  async deleteExistingEvent(id: string): Promise<boolean> {
    const existingEvent = await this.eventModel.findEventById(id);
    if (!existingEvent) {
      return false; // Evento não encontrado para deletar
    }
    return this.eventModel.deleteEvent(id);
  }

  /**
   * Obtém eventos de um mês específico.
   * @param month O nome do mês.
   * @returns Promise<Event[]> Uma lista de eventos para o mês.
   */
  async getEventsByMonth(month: string): Promise<Event[]> {
    const events = await this.eventModel.findEventsByMonth(month);
    return events || [];
  }
}