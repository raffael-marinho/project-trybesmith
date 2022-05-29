import ProductModel from '../models/ProductModel';
import OrderModel from '../models/OrderModel';
import IOrders from '../interfaces/OrderInterface';

export default class OrderService {
  public modelP = new ProductModel();

  public modelO = new OrderModel();

  public getAll = async (): Promise<IOrders[]> => {
    const products = await this.modelP.getAll();
    const orders = await this.modelO.getAll();
    const orderIds: IOrders[] = orders.map((ord) => {
      const productsFiltered: number[] = products.map((p) => {
        if (p.orderId === ord.id) return p.id;
        return 0;
      });
      return { 
        id: ord.id, 
        userId: ord.userId, 
        productsIds: productsFiltered.filter((p: number) => p !== 0) } as unknown as IOrders;
    });
    return orderIds;
  };

  public create = async (userId: number | undefined, productsIds: number[]) => {
    const orderId = await this.modelO.create(userId);

    const updateProductOrderIdPromises = productsIds.map(
      (productId) => this.modelP.updateOrderId(productId, orderId),
    );
    await Promise.all(updateProductOrderIdPromises);

    return { userId, productsIds };
  };
}