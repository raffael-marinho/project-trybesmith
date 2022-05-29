import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/OrderInterface';

export default class OrderModel {
  public getAll = async ():Promise<IOrder[]> => {
    const [order] = await connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return order as IOrder[];
  };

  public create = async (userId: number | undefined): Promise<number> => {
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?);',
      [userId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return insertId;
  };
}