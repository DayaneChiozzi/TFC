import { JwtPayload, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const validate = (token: string): JwtPayload => {
  const decoded = verify(token, JWT_SECRET);
  return decoded as JwtPayload;
};

export default { validate };
