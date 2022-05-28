import { Response, Request, NextFunction } from 'express';
import crypto from 'crypto';
import UserService from '../services/UserService';

export default class UserController {
  public service = new UserService();

  public createUser = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const {  
      username,
      classe,
      level,
      password } = req.body;
    try {
      await this.service.createUser( 
        username,
        classe,
        level,
        password,
      );
      const token = crypto.randomBytes(8).toString('hex');
      return res.status(201).json({ token });
    } catch (error: unknown) {
      return res.status(500).send({ message: (error as Error).message });
    }
  };
}