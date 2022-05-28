import UsersModel from '../models/UsersModel';
import IUsers from '../interfaces/UsersInterfaces';

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
}