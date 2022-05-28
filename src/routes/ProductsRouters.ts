import { Router } from 'express';

import ProductController from '../controllers/ProductController';
import Product from '../middleware/Products';

const productController = new ProductController();

const validation = new Product();

const route = Router();

route.get('/', productController.getAll);
route.post(
  '/',
  validation.nameValidation,
  validation.amountValidation,
  productController.createProduct,
);

export default route;