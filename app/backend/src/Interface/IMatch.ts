import ITeam from './ITeam';

interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean | number;
  teamHome?: ITeam;
  teamAway?: ITeam;
}

export default IMatch;
