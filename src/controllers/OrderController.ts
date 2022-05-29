import { Response, Request, NextFunction } from 'express';
import UserLog from '../interfaces/UserLog';
import OrderService from '../services/OrderService';

export default class OrderController {
  public service = new OrderService();

  public getAll = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const order = await this.service.getAll();
    res.status(200).json(order);
  };

  public create = async (req: UserLog, res: Response) => {
    const userId = req.user?.id;
    const { productsIds } = req.body;

    const createdOrder = await this.service.create(userId, productsIds);

    res.status(201).json(createdOrder);
  };
}