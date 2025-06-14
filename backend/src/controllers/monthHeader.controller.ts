import { Request, Response } from 'express';
import { MonthHeaderService } from '../services/monthHeader.service';
import { MonthHeader } from '../interfaces/monthHeader.interface';

/**
 * @class MonthHeaderController
 * @description Classe responsável por lidar com as requisições HTTP relacionadas a cabeçalhos de meses.
 */
export class MonthHeaderController {
  private monthHeaderService: MonthHeaderService;

  constructor(monthHeaderService: MonthHeaderService = new MonthHeaderService()) {
    this.monthHeaderService = monthHeaderService;
  }

  async getAllMonthHeaders(req: Request, res: Response): Promise<void> {
    try {
      const { month } = req.query;
      let monthHeaders;

      if (month && typeof month === 'string') {
        // Se 'month' for fornecido, filtra por mês
        monthHeaders = await this.monthHeaderService.getMonthHeadersByMonth(month);
      } else {
        // Caso contrário, retorna todos os cabeçalhos de mês
        monthHeaders = await this.monthHeaderService.getAllMonthHeaders();
      }

      res.status(200).json(monthHeaders);
    } catch (error: any) {
      console.error('Error in getAllMonthHeaders (with/without month filter):', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getMonthHeaderById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const monthHeader = await this.monthHeaderService.getMonthHeaderById(parseInt(id));
      if (monthHeader) {
        res.status(200).json(monthHeader);
      } else {
        res.status(404).json({ message: 'Month header not found' });
      }
    } catch (error: any) {
      console.error('Error in getMonthHeaderById:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createMonthHeader(req: Request, res: Response): Promise<void> {
    try {
      const newMonthHeaderData: Omit<MonthHeader, 'id'> = req.body;
      const createdMonthHeader = await this.monthHeaderService.createNewMonthHeader(newMonthHeaderData);
      if (createdMonthHeader) {
        res.status(201).json(createdMonthHeader);
      } else {
        res.status(400).json({ message: 'Failed to create month header' });
      }
    } catch (error: any) {
      console.error('Error in createMonthHeader:', error.message);
      if (error.message.includes('required')) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  async updateMonthHeader(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const updatedMonthHeaderData: Partial<MonthHeader> = req.body;
      if (isNaN(id)) {
        res.status(400).json({ message: 'Invalid ID parameter' });
      }
      const updatedMonthHeader = await this.monthHeaderService.updateExistingMonthHeader(id, updatedMonthHeaderData);
      if (updatedMonthHeader) {
        res.status(200).json(updatedMonthHeader);
      } else {
        res.status(404).json({ message: 'Month header not found or failed to update' });
      }
    } catch (error: any) {
      console.error('Error in updateMonthHeader:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteMonthHeader(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const success = await this.monthHeaderService.deleteExistingMonthHeader(parseInt(id));
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Month header not found or failed to delete' });
      }
    } catch (error: any) {
      console.error('Error in deleteMonthHeader:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}