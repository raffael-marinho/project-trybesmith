import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUsers from '../interfaces/UsersInterfaces';
import ILogin from '../interfaces/LoginInterface';

export default class UsersModel {
  public createUsers = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ):Promise<IUsers> => {
    const [user] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
    return { id: user.insertId, username, classe, level, password };
  };

  public getByLogin = async (login: ILogin): Promise<IUsers | undefined> => {
    const { username, password } = login;

    const result = await connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    const [rows] = result;
    const [user] = rows as IUsers[];

    return user;
  };
}