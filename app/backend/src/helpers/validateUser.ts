import { Request, Response, NextFunction } from 'express';
// import CustomError from '../errors/customError';

const userValidate = (req:Request, res:Response, next: NextFunction) => {
  const { email } = req.body;

  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValidate = regexEmail.test(email);

  if (!email || !emailValidate) {
    res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export default userValidate;
