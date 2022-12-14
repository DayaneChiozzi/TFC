import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';
import CustomError from '../../errors/customError';

class MatchesController {
  constructor(protected matchesService = new MatchesService()) { }

  public getMatchAll = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.matchesService.getMatchAll();
    return res.status(200).json(result);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
      const resultBody = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress };
      const resultCreate = await this.matchesService.create(resultBody);
      return res.status(201).json(resultCreate);
    } catch (error) {
      const resultError = error as CustomError;
      return res.status(resultError.status).json({ message: resultError.message });
    }
  };

  public finishMatch = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await this.matchesService.finishMatch(Number(id));

    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatchGoals = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchesService.updateMatchGoals(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated goals' });
  };
}

export default MatchesController;
