interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalDraws: number;
  totalVictories: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

export default ILeaderboard;
