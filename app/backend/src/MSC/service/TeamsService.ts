import TeamsModel from '../../database/models/Team';
import ITeam from '../../Interface/ITeam';

class TeamsService {
  public model = TeamsModel;

  public getTeams = async ():Promise<ITeam[]> => {
    const resultTeams = await this.model.findAll();
    return resultTeams as ITeam[];
  };

  public getTeamsByPk = async (id:number):Promise<ITeam> => {
    const resultTeamsByPk = await this.model.findByPk(id);
    return resultTeamsByPk as ITeam;
  };
}

export default TeamsService;
