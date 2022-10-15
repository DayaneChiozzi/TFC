import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/customError';

const FAULT_MESSAGE = 'All fields must be filled';

const emailVerify = (email: string) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValidate = regexEmail.test(email);

  if(!email) throw new CustomError(400, FAULT_MESSAGE);
  if(!emailValidate) throw new CustomError(400, FAULT_MESSAGE);

};

const PassVerify = (password: string) => {

  if(!password) throw new CustomError(400, FAULT_MESSAGE);
  if(password.length < 2) throw new CustomError(400, FAULT_MESSAGE);

};

const userValidate = (req:Request, res:Response, next: NextFunction) =>{
 const {email, password} = req.body;
 emailVerify(email);
 PassVerify(password);
 next();

};

export default userValidate;