import { Router } from 'express';

import UserController from '../controllers/UserController';
import Users from '../middleware/User';

const Controller = new UserController();

const validation = new Users();

const route = Router();
route.post(
  '/',
  validation.usernameValidation,
  validation.classeValidation,
  validation.levelValidation,
  validation.passwordValidation,
  Controller.createUser,
);

export default route;