import { Pool } from 'mysql2/promise';
import IUsers from '../interfaces/UsersInterfaces';
import ILogin from '../interfaces/LoginInterface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getByLogin = async (login: ILogin): Promise<IUsers | undefined> => {
    const { username, password } = login;

    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    const [rows] = result;
    const [user] = rows as IUsers[];

    return user;
  };
}

export default LoginModel;