import { Player, Match } from "./api-schema";

export class PlayerData {
  id: string;
  firstname: string;
  lastname: string;
  pictureUrl: string;
  flagUrl: string;
  age: string;
  height: string;
  weight: string;
  rank: number;
  points: string;
  totalTimePlayed = "";
  wins = 0;
  losses = 0;
  winningGames: Match[] = [];

  constructor(player: Player, matches: Match[]) {
    this.id = player.id;
    this.firstname = player.firstname;
    this.lastname = player.lastname;
    this.pictureUrl = player.picture.url;
    this.flagUrl = player.country.picture.url;
    this.age = `${player.stats.age} y.o.`;
    this.height = `${player.stats.height / 100}m`;
    this.weight = `${player.stats.weight / 1000}kg`;
    this.rank = player.stats.rank;
    this.points = ` ${player.stats.points}`;
    this.getNumberOfWinsAndLoses(player.id, matches);
    this.calculateTotalGamesDuration(matches);
  }

  private getDurationInMinutes(start: string, end: string) {
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();

    const matchDuration = endTime - startTime;
    const hours = Math.floor(matchDuration / 3600000);
    const minutes = Math.floor((matchDuration % 3600000) / 60000);
    return `${hours}hrs ${minutes}mins`;
  }

  private getNumberOfWinsAndLoses(playerId: string, matches: Match[]) {
    const winningMatches = matches
      .filter((match) => match.winner.id === playerId)
      .map((match) => {
        return {
          ...match,
          duration: this.getDurationInMinutes(match.startTime, match.endTime),
          playerOne: `${match.players[0].firstname} ${match.players[0].lastname}`,
          playerTwo: `${match.players[1].firstname} ${match.players[1].lastname}`,
        };
      });

    this.winningGames = winningMatches;
    this.wins = winningMatches.length;
    this.losses = matches.length - this.wins;
  }

  private calculateTotalGamesDuration(matches: Match[]) {
    let totalDuration = 0;
    for (const match of matches) {
      const startTime = new Date(match.startTime).getTime();
      const endTime = new Date(match.endTime).getTime();

      const matchDuration = endTime - startTime;

      totalDuration += matchDuration;
    }

    const hours = Math.floor(totalDuration / 3600000);
    const minutes = Math.floor((totalDuration % 3600000) / 60000);

    this.totalTimePlayed = `${hours}hrs ${minutes}mins`;
  }
}
