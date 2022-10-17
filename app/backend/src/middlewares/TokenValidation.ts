import { RequestHandler } from 'express';
import token from '../helpers/validateToken';

const tokenValidation:RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const resultToken = token.validate(authorization);
    res.locals.email = resultToken.email;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidation;
