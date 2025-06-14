import { MonthHeaderModel } from '../models/monthHeader.model';
import { MonthHeader } from '../interfaces/monthHeader.interface';

/**
 * @class MonthHeaderService
 * @description Classe que contém a lógica de negócios para manipulação de cabeçalhos de meses.
 */
export class MonthHeaderService {
  private monthHeaderModel: MonthHeaderModel;

  constructor(monthHeaderModel: MonthHeaderModel = new MonthHeaderModel()) {
    this.monthHeaderModel = monthHeaderModel;
  }

  async getAllMonthHeaders(): Promise<MonthHeader[]> {
    const monthHeaders = await this.monthHeaderModel.findAllMonthHeaders();
    return monthHeaders || [];
  }

  async getMonthHeadersByMonth(month: string): Promise<Event[]> {
      const monthHeaders = await this.monthHeaderModel.findMonthByMonth(month);
      return monthHeaders || [];
    }

  async getMonthHeaderById(id: number): Promise<MonthHeader | null> {
    return this.monthHeaderModel.findMonthHeaderById(id);
  }

  async createNewMonthHeader(monthHeader: Omit<MonthHeader, 'id'>): Promise<MonthHeader | null> {
    if (!monthHeader.name || !monthHeader.theme) {
      throw new Error('Name and theme are required for a new month header.');
    }
    return this.monthHeaderModel.createMonthHeader(monthHeader);
  }

  async updateExistingMonthHeader(id: number, monthHeader: Partial<MonthHeader>): Promise<MonthHeader | null> {
    const existingMonthHeader = await this.monthHeaderModel.findMonthHeaderById(id);
    if (!existingMonthHeader) {
      return null;
    }
    return this.monthHeaderModel.updateMonthHeader(id, monthHeader);
  }

  async deleteExistingMonthHeader(id: number): Promise<boolean> {
    const existingMonthHeader = await this.monthHeaderModel.findMonthHeaderById(id);
    if (!existingMonthHeader) {
      return false;
    }
    return this.monthHeaderModel.deleteMonthHeader(id);
  }
}