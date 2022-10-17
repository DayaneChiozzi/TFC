import CustomError from '../../errors/customError';
import MatchesModel from '../../database/models/Match';
import TeamModel from '../../database/models/Team';
import IMatch from '../../Interface/IMatch';
// import IMatchResponse from '../../Interface/IMatchResponse';
import TeamsService from './TeamsService';

// const implementada para incluir as keys teamHome e teamAway no resultTeams, raciocinio desenvolvido com a ajuda da colega Elaine Costa;
const includeSequelize = [{
  model: TeamModel,
  as: 'teamHome',
  attributes: { exclude: ['id'] },
},
{
  model: TeamModel,
  as: 'teamAway',
  attributes: { exclude: ['id'] },
}];

class MatchesService {
  public model = MatchesModel;
  public teamsService : TeamsService;

  constructor() {
    this.teamsService = new TeamsService();
  }

  public getMatchAll = async ():Promise<IMatch[]> => {
    const resultTeams = await this.model.findAll({ include: includeSequelize });
    return resultTeams as IMatch[];
  };

  public create = async (match: IMatch): Promise<IMatch> => {
    if (match.homeTeam === match.awayTeam) {
      throw new CustomError(401, 'It is not possible to create a match with two equal teams');
    }
    const checkHomeTeam = await this.teamsService.getTeamsByPk(match.homeTeam);
    if (!checkHomeTeam) {
      throw new CustomError(404, 'There is no team with such id!');
    }
    const resultCreate = await this.model.create({ ...match });
    return resultCreate;
  };

  public finishMatch = async (id: number): Promise<number> => {
    await this.model.findByPk(id);
    const resultModel = await this.model.update({ inProgress: false }, {
      where: { id },
    });
    return resultModel[0];
  };
}

export default MatchesService;
