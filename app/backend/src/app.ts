import * as express from 'express';
import tokenValidate from './middlewares/TokenValidation';
import LoginValidation from './middlewares/loginValidation';
import LoginController from './MSC/controllers/loginController';
import TeamsController from './MSC/controllers/teamsController';
import MatchesController from './MSC/controllers/matchesController';

const loginController = new LoginController();
const loginValidation = new LoginValidation();
const teamsController = new TeamsController();
const matchesController = new MatchesController();

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.post('/login', loginValidation.loginVerify, loginController.login);
    this.app.get('/login/validate', tokenValidate, loginController.getRoleUser);
    this.app.get('/teams', teamsController.getTeams);
    this.app.get('/teams/:id', teamsController.getTeamsByPk);
    this.app.get('/matches', matchesController.getMatchAll);
    this.app.post('/matches', tokenValidate, matchesController.create);
    this.app.patch('/matches/:id/finish', matchesController.finishMatch);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
