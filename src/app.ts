import express, { Request, Response } from 'express';

import ProductRoutes from './routes/ProductsRouters';
import userRouter from './routes/UserRouter';
import OrderRoutes from './routes/OrderRouter';

const app = express();

app.use(express.json());

app.get('/', (_request: Request, response: Response) => response.send({ status: 'OK' }));

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);
app.use('/users', userRouter);

export default app;
