import { NextFunction, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import validateJWT from '../jwt/validate';
import UserLog from '../interfaces/UserLog';

const authMiddleware = (req: UserLog, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const { data } = validateJWT(token) as JwtPayload;

  req.user = data;

  next();
};

export default authMiddleware;