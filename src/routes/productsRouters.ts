import { Router } from 'express';

import ProductController from '../controllers/Product.controller';
import Product from '../middleware/products';

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