import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import authMiddleware from '../middleware/auth';
import orderValidate from '../middleware/Order';

const router = Router();
const orderController = new OrderController();

router.route('/')
  .get(orderController.getAll)
  .post(authMiddleware, orderValidate, orderController.create);

export default router;