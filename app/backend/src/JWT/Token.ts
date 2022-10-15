
import 'dotenv/config';
import { JwtPayload, sign, verify }  from 'jsonwebtoken';
import  CustomError  from '../errors/customError';

const { JWT_SECRET } = process.env;

const createToken = (email:string) => {

  if(!JWT_SECRET) throw new Error('Secret not found');
  
 const token = sign({ email }, JWT_SECRET, { 
  algorithm: 'HS256', expiresIn: '10d'});
 return token; 
};

const verifyToken = (token: string): JwtPayload | string => {
  if(!token) throw new Error('Token not found')
  if(!JWT_SECRET) throw new Error('Secret not found')
  try {
    const decode = verify(token, JWT_SECRET);
    return decode;
    
  } catch (error) {
    throw new CustomError(401, 'Token must be a valid token')
  }
}

export default {createToken, verifyToken}