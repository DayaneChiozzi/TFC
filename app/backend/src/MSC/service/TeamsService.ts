import TeamsModel from '../../database/models/Team';
import ITeam from '../../Interface/ITeam';

class TeamsService {
  public model = TeamsModel;

  public getTeams = async ():Promise<ITeam[]> => {
    const resultTeams = await this.model.findAll();
    return resultTeams as ITeam[];
  };
}

export default TeamsService;
