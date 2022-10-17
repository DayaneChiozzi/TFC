import IMatch from './IMatch';

interface MatchResponse {
  status: number;
  message?: string;
  result?: IMatch;
}

export default MatchResponse;
