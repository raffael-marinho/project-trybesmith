import { Response, Request, NextFunction } from 'express';
// import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/ProductService';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };

  public createProduct = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const { name, amount } = req.body;
    try {
      const product = await this.service.createProduct(name, amount);
      return res.status(201).json(product);
    } catch (error: unknown) {
      return res.status(500).send({ message: (error as Error).message });
    }
  };
}