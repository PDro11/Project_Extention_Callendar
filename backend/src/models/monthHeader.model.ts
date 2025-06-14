import { supabase } from '../config/supabase';
import { MonthHeader } from '../interfaces/monthHeader.interface';

/**
 * @class MonthHeaderModel
 * @description Classe responsável por interagir com a tabela 'month_headers' no Supabase.
 */
export class MonthHeaderModel {
  private tableName = 'month_headers';

  async findAllMonthHeaders(): Promise<MonthHeader[] | null> {
    const { data, error } = await supabase.from(this.tableName).select('*').order('id', { ascending: true });
    if (error) {
      console.error('Error fetching month headers:', error);
      return null;
    }
    // O tipo de 'data' será inferido corretamente de 'Database' em supabase.ts
    return data;
  }

  async findMonthHeaderById(id: number): Promise<MonthHeader | null> {
    const { data, error } = await supabase.from(this.tableName).select('*').eq('id', id).single();
    if (error) {
      console.error(`Error fetching month header with ID ${id}:`, error);
      return null;
    }
    return data;
  }

  async createMonthHeader(monthHeader: Omit<MonthHeader, 'id'>): Promise<MonthHeader | null> {
    const { data, error } = await supabase.from(this.tableName).insert(monthHeader).select().single();
    if (error) {
      console.error('Error creating month header:', error);
      return null;
    }
    return data;
  }

  async updateMonthHeader(id: number, monthHeader: Partial<MonthHeader>): Promise<MonthHeader | null> {
    const { data, error } = await supabase.from(this.tableName).update(monthHeader).eq('id', id).select().single();
    if (error) {
      console.error(`Error updating month header with ID ${id}:`, error);
      return null;
    }
    return data;
  }

  async deleteMonthHeader(id: number): Promise<boolean> {
    const { error } = await supabase.from(this.tableName).delete().eq('id', id);
    if (error) {
      console.error(`Error deleting month header with ID ${id}:`, error);
      return false;
    }
    return true;
  }

  async findMonthByMonth(month: string): Promise<Event[] | null> {
    const { data, error } = await supabase.from(this.tableName).select('*').ilike('name', `%${month}%`);
    if (error) {
      console.error(`Error fetching monthHeaders for month ${month}:`, error);
      return null;
    }
    return data;
  }
}