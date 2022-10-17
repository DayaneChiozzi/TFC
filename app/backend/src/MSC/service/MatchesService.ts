import MatchesModel from '../../database/models/Match';
import TeamModel from '../../database/models/Team';
import IMatch from '../../Interface/IMatch';

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

  public getMatchAll = async ():Promise<IMatch[]> => {
    const resultTeams = await this.model.findAll({ include: includeSequelize });
    return resultTeams as IMatch[];
  };

  public create = async ({
    homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress }: IMatch): Promise<IMatch> => {
    const resultCreate = await this.model.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress });
    return resultCreate as IMatch;
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
