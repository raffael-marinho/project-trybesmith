import express, { Request, Response } from 'express';

import ProductRoutes from './routes/productsRouters';

const app = express();

app.use(express.json());

app.get('/', (_request: Request, response: Response) => response.send({ status: 'OK' }));

app.use('/products', ProductRoutes);

export default app;
