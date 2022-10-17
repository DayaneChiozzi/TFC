import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  constructor(protected matchesService = new MatchesService()) { }

  public getMatchAll = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.matchesService.getMatchAll();
    return res.status(200).json(result);
  };
}
export default MatchesController;
