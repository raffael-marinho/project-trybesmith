import ProductModel from '../models/ProductModel';
import IProduct from '../interfaces/ProductInterface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public createProduct = async (name: string, amount: string):Promise<IProduct> => {
    const products = await this.model.createProduct(name, amount);
    return products;
  };
  
  public updateOrderId = async (id: number, orderId: number) => {
    await this.model.updateOrderId(id, orderId);
  };
}