import { Request, Response } from 'express';
import LoginService from '../service/LoginService';

class LoginController {
  constructor(protected loginService = new LoginService()) { }

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email } = req.body;
    const result = await this.loginService.login(email);
    console.log('CONTROLER', result);
    if (!result) {
      return res.status(404).json({ message: 'email or password not found' });
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
