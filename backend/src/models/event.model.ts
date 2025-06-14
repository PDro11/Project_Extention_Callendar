import { supabase } from '../config/supabase';
import { Event } from '../interfaces/event.interface';
import crypto from 'node:crypto';

/**
 * @class EventModel
 * @description Classe responsável por interagir com a tabela 'events' no Supabase.
 * Segue o princípio da Responsabilidade Única (SRP) ao focar apenas na persistência de dados.
 */
export class EventModel {
  // A string do nome da tabela é passada diretamente para from()
  private tableName = 'events'; 

  /**
   * Busca todos os eventos do banco de dados.
   * @returns Promise<Event[] | null> Uma lista de eventos ou null em caso de erro.
   */
  async findAllEvents(): Promise<Event[] | null> {
    // Usamos 'events' como string. Os tipos vêm da configuração do Supabase client.
    const { data, error } = await supabase.from(this.tableName).select('*');
    if (error) {
      console.error('Error fetching events:', error);
      return null;
    }
    // O Supabase SDK agora deve inferir que 'data' é do tipo Event[]
    return data;
  }

  /**
   * Busca um evento pelo ID.
   * @param id O ID do evento.
   * @returns Promise<Event | null> O evento encontrado ou null se não existir ou em caso de erro.
   */
  async findEventById(id: string): Promise<Event | null> {
    const { data, error } = await supabase.from(this.tableName).select('*').eq('id', id).single();
    if (error) {
      console.error(`Error fetching event with ID ${id}:`, error);
      return null;
    }
    return data;
  }

    /**
     * Cria um novo evento no banco de dados.
     * @param event Os dados do evento a ser criado.
     * @returns Promise<Event | null> O evento criado ou null em caso de erro.
     */
    async createEvent(event: Omit<Event, 'id'>): Promise<Event | null> {
      // Agora 'crypto' estará definido graças à importação
      const eventWithId = { ...event, id: crypto.randomUUID() }; 
      const { data, error } = await supabase.from(this.tableName).insert(eventWithId).select().single();
      if (error) {
        console.error('Error creating event:', error);
        return null;
      }
      return data;
    }

  /**
   * Atualiza um evento existente.
   * @param id O ID do evento a ser atualizado.
   * @param event Os dados do evento para atualização.
   * @returns Promise<Event | null> O evento atualizado ou null em caso de erro.
   */
  async updateEvent(id: string, event: Partial<Event>): Promise<Event | null> {
    // Para `update`, o Supabase SDK infere o tipo `Update`
    const { data, error } = await supabase.from(this.tableName).update(event).eq('id', id).select().single();
    if (error) {
      console.error(`Error updating event with ID ${id}:`, error);
      return null;
    }
    return data;
  }

  /**
   * Deleta um evento pelo ID.
   * @param id O ID do evento a ser deletado.
   * @returns Promise<boolean> True se o evento foi deletado com sucesso, false caso contrário.
   */
  async deleteEvent(id: string): Promise<boolean> {
    const { error } = await supabase.from(this.tableName).delete().eq('id', id);
    if (error) {
      console.error(`Error deleting event with ID ${id}:`, error);
      return false;
    }
    return true;
  }

  /**
   * Busca eventos por nome do mês.
   * @param month O nome do mês (ex: 'janeiro').
   * @returns Promise<Event[] | null> Uma lista de eventos para o mês ou null em caso de erro.
   */
  async findEventsByMonth(month: string): Promise<Event[] | null> {
    const { data, error } = await supabase.from(this.tableName).select('*').eq('month', month.toLowerCase());
    if (error) {
      console.error(`Error fetching events for month ${month}:`, error);
      return null;
    }
    return data;
  }
}