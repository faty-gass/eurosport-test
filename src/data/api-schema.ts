interface Picture {
  url: string;
}

interface Country {
  picture: Picture;
  code: string;
}

enum Sex {
  MAN = "MAN",
  WOMAN = "WOMAN",
}

interface Stats {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
}

export interface Player {
  id: string;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: Sex;
  picture: Picture;
  country: Country;
  stats: Stats;
}
export interface Match {
  id: string;
  players: Player[];
  winner: Player;
  startTime: string;
  endTime: string;
}

export interface Query {
  players: Player[];
  matches: Match[];
}
