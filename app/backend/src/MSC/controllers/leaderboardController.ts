import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';

class LeaderboardController {
  constructor(protected service = new LeaderboardService()) { }

  public getAllHome = async (req: Request, res: Response): Promise<Response> => {
    const resultHomeService = await this.service.getAllHome();
    return res.status(200).json(resultHomeService);
  };
}

export default LeaderboardController;
