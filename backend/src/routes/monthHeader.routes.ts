import { Router } from 'express';
import { MonthHeaderController } from '../controllers/monthHeader.controller';

/**
 * @class MonthHeaderRoutes
 * @description Classe que define as rotas da API para cabeçalhos de meses.
 */
export class MonthHeaderRoutes {
  public router: Router;
  private monthHeaderController: MonthHeaderController;

  constructor(monthHeaderController: MonthHeaderController = new MonthHeaderController()) {
    this.router = Router();
    this.monthHeaderController = monthHeaderController;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.monthHeaderController.getAllMonthHeaders.bind(this.monthHeaderController));
    this.router.get('/:id', this.monthHeaderController.getMonthHeaderById.bind(this.monthHeaderController));
    //this.router.post('/', this.monthHeaderController.createMonthHeader.bind(this.monthHeaderController));
    this.router.put('/:id', this.monthHeaderController.updateMonthHeader.bind(this.monthHeaderController));
    //this.router.delete('/:id', this.monthHeaderController.deleteMonthHeader.bind(this.monthHeaderController));
  }
}