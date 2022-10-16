import { Request, Response } from 'express';
import LoginService from '../service/LoginService';
import UserModel from '../../database/models/User';

class LoginController {
  public model = UserModel;
  constructor(protected loginService = new LoginService()) { }

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email } = req.body;
    const result = await this.loginService.login(email);

    if (!result) {
      return res.status(404).json({ message: 'email or password not found' });
    }
    return res.status(200).json({ token: result });
  };

  public getRoleUser = async (_req: Request, res: Response): Promise<Response> => {
    const { email } = res.locals;
    const result = await this.loginService.getLoginValidate(email);

    return res.status(200).json(result);
  };
}

export default LoginController;
