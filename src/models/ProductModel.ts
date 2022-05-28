import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/ProductInterface';

export default class ProductModel {
  public getAll = async ():Promise<IProduct[]> => {
    const [product] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return product as IProduct[];
  };

  public createProduct = async (name: string, amount: string):Promise<IProduct> => {
    const [product] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );
    return { id: product.insertId, name, amount };
  };
}