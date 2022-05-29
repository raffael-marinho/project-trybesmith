import express, { Request, Response } from 'express';
import error from './middleware/Error';
import ProductRouter from './routes/ProductsRouters';
import userRouter from './routes/UserRouter';
import OrderRouter from './routes/OrderRouter';
import LoginRouter from './routes/LoginRouter';

const app = express();

app.use(express.json());

app.get('/', (_request: Request, response: Response) => response.send({ status: 'OK' }));

app.use('/products', ProductRouter);
app.use('/orders', OrderRouter);
app.use('/users', userRouter);
app.use('/login', LoginRouter);
app.use(error);

export default app;
