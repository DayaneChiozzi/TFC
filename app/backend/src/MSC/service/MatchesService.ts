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
}

export default MatchesService;
