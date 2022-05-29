import { sign, Secret } from 'jsonwebtoken';
import IJwt from '../interfaces/JwtInterface';

const generateJWT = (data: IJwt): string => {
  const secret = process.env.JWT_SECRET || 'secret' as Secret;

  const token = sign({ data }, secret, { expiresIn: '3d', algorithm: 'HS256' });

  return token;
};

export default generateJWT;