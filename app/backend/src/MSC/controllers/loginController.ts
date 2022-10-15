import { Request, Response } from "express";
import LoginService from './LoginService';

class loginController{
  constructor(protected loginService: LoginService){ }

  public login = async(req: Request, res: Response): Promise<Response> =>{
    const { email, password } = req.body;
    const result = await this.loginService.login(email, password);
    return res.status(200).json({ token: result});
  };

  public loginValidate = async(req: Request, res: Response): Promise<Response> => {
    const { authorization } = req.headers;
    const { user } =  req.body;
    const result = await this.loginService.loginValidate(authorization, user.email);
    return res.status(200).json(result);
  };
}

export default loginController;