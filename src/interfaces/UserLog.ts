import { Request } from 'express';
import IJwt from './JwtInterface';

interface UserLog extends Request {
  user?: IJwt;
}

export default UserLog;