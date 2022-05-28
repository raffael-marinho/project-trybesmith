import { Response, Request, NextFunction } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  public service = new OrderService();

  public getAll = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const order = await this.service.getAll();
    res.status(200).json(order);
  };
}