
import { Router } from 'express';
import userValidate from '../helpers/validateUser';
import LoginController  from '../MSC/controllers/loginController';
import LoginService from '../MSC/service/LoginService';
import User from '../database/models/User';

const loginRoute = Router();

const loginController = new LoginController(new LoginService(User));

loginRoute.post('/', userValidate, loginController.login);

export default loginRoute;