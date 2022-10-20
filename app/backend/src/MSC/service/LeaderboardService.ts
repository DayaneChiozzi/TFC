// import ILeaderboard from '../../Interface/ILeaderboard';
import MatchesService from './MatchesService';
import TeamsService from './TeamsService';

class LeaderboardService {
  public teamsService: TeamsService;
  public matchesService: MatchesService;

  constructor() {
    this.teamsService = new TeamsService();
    this.matchesService = new MatchesService();
  }

  public getAllHome = async () => {
    const matches = await this.matchesService.getMatchAllTest();
    const teams = await this.teamsService.getTeams();
    const nameTime = teams.map((name) => {
      
      }
    });
    // const motagem = matches.reduce((acc, value) => {
    //   acc[value.homeTeam]: value.homeTeamGoals;
    //   return acc;
    // }, {});
    console.log('matches', nameTime);
    // console.log('teams', teams);
    // const emptyLearcerboard = teams.filter((team) => matches.some((match) => match.inProgress
    // .))
  };
}

export default LeaderboardService;
