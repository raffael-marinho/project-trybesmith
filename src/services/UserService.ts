import UsersModel from '../models/UsersModel';
import IUsers from '../interfaces/UsersInterfaces';
import ILogin from '../interfaces/LoginInterface';

export default class UserService {
  public model = new UsersModel();

  public createUser = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ):Promise<IUsers> => {
    const user = await this.model.createUsers(
      username,
      classe,
      level,
      password,
    );
    return user;
  };

  public getByLogin = async (login: ILogin): Promise<IUsers | undefined> => {
    const user = await this.model.getByLogin(login);

    return user;
  };
}