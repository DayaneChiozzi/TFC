import { Request, Response } from 'express';
import LoginService from '../service/LoginService';

class LoginController {
  constructor(protected loginService = new LoginService()) { }

  // public createUser = async (req: Request, res: Response): Promise<Response> => {
  //   const { username, role, email, password } = req.body;
  //   const resultNewUser = await this.loginService.createUser({ username, role, email, password });
  //   return res.status(200).json({ resultNewUser });
  // };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email } = req.body;
    const result = await this.loginService.login(email);
    if (!result) {
      return res.status(404).json({ message: 'email not found' });
    }
    return res.status(200).json({ token: result });
  };

  // public loginValidate = async (req: Request, res: Response): Promise<Response> => {
  //   const { authorization } = req.headers;
  //   const { user } = req.body;
  //   const result = await this.loginService.loginValidate(authorization, user.email);
  //   return res.status(200).json(result);
  // };
}

export default LoginController;
