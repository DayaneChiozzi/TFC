import { Request, Response } from 'express';
import TeamsService from '../service/TeamsService';
// import TeamsModel from '../../database/models/Team';

class TeamsController {
  // public model = TeamsModel;
  constructor(protected teamsService = new TeamsService()) { }

  public getTeams = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.teamsService.getTeams();
    return res.status(200).json(result);
  };

  public getTeamsByPk = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await this.teamsService.getTeamsByPk(Number(id));
    return res.status(200).json(result);
  };
}

export default TeamsController;
