import UserService from './UserService';
import generateJWT from '../jwt/Generate';
import ILogin from '../interfaces/LoginInterface';

class LoginService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public login = async (login: ILogin): Promise<string | boolean> => {
    const user = await this.userService.getByLogin(login);

    if (!user) return false;

    const token = generateJWT({ id: user.id, username: user.username });

    return token;
  };
}

export default LoginService;