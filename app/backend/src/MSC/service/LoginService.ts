// import { compareSync } from 'bcryptjs';

import Usermodel from '../../database/models/User';
import Token from '../../JWT/Token';
import IUser from '../../Interface/IUser';

// const INCORRET_PASS_EMAIL = 'Incorrect email or password';
// const NOT_FOUND_TOKEN = 'Token not found';

class LoginService {
  public model = Usermodel;

  public login = async (email: string):Promise<object | string> => {
    const resultUser = await this.model.findOne({ where: { email } }) as IUser;

    if (!resultUser) {
      throw new Error('email not found');
    }

    // const verifyPassword = compareSync(password, resultUser.password);
    // if (!verifyPassword) throw new CustomError(401, INCORRET_PASS_EMAIL);

    const generatedToken = Token.createToken(email);
    return generatedToken;
  };

  // public loginValidate = async (authorization: string | undefined, user: string) => {
  //   if (!authorization) throw new CustomError(401, NOT_FOUND_TOKEN);

  //   const resultAuthToken = Token.verifyToken(authorization);
  //   if (!resultAuthToken) throw new CustomError(401, NOT_FOUND_TOKEN);

  //   const resultUser = await this.userModel.findOne({
  //     where: { email: user }, raw: true, attributes: ['role'],
  //   });
  //   if (!resultUser) throw new CustomError(400, 'User not found');

  //   return resultUser;
  // };
}

export default LoginService;
