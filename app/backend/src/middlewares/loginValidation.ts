import { Request, Response, NextFunction } from 'express';
// import userModel from '../database/models/User';

class LoginValidation {
  // public model = userModel;
  public loginVerify = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
  };
}

export default LoginValidation;
