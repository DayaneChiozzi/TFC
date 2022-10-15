import { compareSync } from 'bcryptjs';
import CustomError from '../../errors/customError';
import User from '../../database/models/User';
import Token from '../../JWT/Token';

const INCORRET_PASS_EMAIL = 'Incorrect email or password';
const NOT_FOUND_TOKEN = 'Token not found';

class LoginService {
  constructor(protected userModel: typeof User){ }

  public login = async(email: string, password: string):Promise<string | undefined> => {
    const resultUser = await this.userModel.findOne({ where: { email } });
    if(!resultUser) throw new CustomError(401, INCORRET_PASS_EMAIL);

    const verifyPassword = compareSync(password, resultUser.password);
    if(!verifyPassword) throw new CustomError(401, INCORRET_PASS_EMAIL);

    const generatedToken = Token.createToken(email);
    return generatedToken
  }

  public loginValidate = async (authorization: string | undefined, user: string) => {
    if(!authorization) throw new CustomError(401,NOT_FOUND_TOKEN);

    const resultAuthToken = Token.verifyToken(authorization);
    if(!resultAuthToken) throw new CustomError(401,NOT_FOUND_TOKEN);

    const resultUser = await this.userModel.findOne({
      where: { email: user}, raw: true, attributes: ['role']
    });
    if(!resultUser) throw new CustomError(400, 'User not found');

    return resultUser
  }
}

export default LoginService