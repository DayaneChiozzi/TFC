import { Request, Response, NextFunction } from 'express';
import userModel from '../database/models/User';

class LoginValidation {
  public model = userModel;
  public loginVerify = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const emailResult = await this.model.findOne({ where: { email }, raw: true });
    if (!emailResult) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    next();
  };
}

export default LoginValidation;
