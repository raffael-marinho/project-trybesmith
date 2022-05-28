import connection from './connection';
import IOrder from '../interfaces/OrderInterface';

export default class OrderModel {
  public getAll = async ():Promise<IOrder[]> => {
    const [order] = await connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return order as IOrder[];
  };
}