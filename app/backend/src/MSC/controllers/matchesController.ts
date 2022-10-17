import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  constructor(protected matchesService = new MatchesService()) { }

  public getMatchAll = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.matchesService.getMatchAll();
    return res.status(200).json(result);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
    const resultBody = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress };
    const resultCreate = await this.matchesService.create(resultBody);
    return res.status(201).json(resultCreate);
  };
}
export default MatchesController;
