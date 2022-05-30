export interface Show {
  score: number;
  show: ShowDetails;
}

export interface ShowDetails {
  id: number;
  url: string;
  name: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  summary: string;
}
