import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import Login from '../middleware/Login';

const router = Router();
const loginController = new LoginController();
const loginValidate = new Login();

router.route('/')
  .post(
    loginValidate.usernameValidation,
    loginValidate.passwordValidation,
    loginController.login,
  );

export default router;