// import * as bcrypt from 'bcryptjs';

import IToken from '../../Interface/IToken';
import Usermodel from '../../database/models/User';
import Token from '../../JWT/Token';
import IUser from '../../Interface/IUser';

class LoginService {
  public model = Usermodel;

  public login = async (email: string):Promise<IToken | string> => {
    const resultUser = await this.model.findOne({ where: { email }, raw: true }) as IUser;
    if (!resultUser) {
      throw new Error('email not found');
    }
    // const resultPassword = bcrypt.compareSync(password, resultUser.password);
    // console.log('SERVICE RESULTPASSWORD', resultPassword);

    const generatedToken = Token.createToken(email);
    return generatedToken;
  };
}

export default LoginService;
