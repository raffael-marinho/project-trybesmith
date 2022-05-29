import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const error = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (Joi.isError(err)) {
    const { type, message } = err.details[0];

    const code = type === 'any.required' ? 400 : 422;

    return res.status(code).json({ message });
  }

  if (err.name.includes('Token')) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.status(500).json({ message: err.message });
};

export default error;