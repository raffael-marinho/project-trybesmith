import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUsers from '../interfaces/UsersInterfaces';

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
}