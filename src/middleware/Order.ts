import { NextFunction, Request, Response } from 'express';
import order from '../helpes/orderhelpes';

const orderValidate = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  const { error } = order.validate({ productsIds });

  if (error) throw error;

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

export default orderValidate;