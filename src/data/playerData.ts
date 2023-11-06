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
  loses = 0;
  winningGames = [];

  constructor(player: Player, matches: Match[]) {
    this.id = player.id;
    this.firstname = player.firstname;
    this.lastname = player.lastname;
    this.pictureUrl = player.picture.url;
    this.flagUrl = player.country.picture.url;
    this.age = `${player.stats.age}ans`;
    this.height = `${player.stats.height / 100}m`;
    this.weight = `${player.stats.weight / 1000}kg`;
    this.rank = player.stats.rank;
    this.points = ` ${player.stats.points}points`;
    this.getNumberOfWinsAndLoses(player.id, matches);
    this.calculateTotalGamesDuration(matches);
  }

  private getDurationInMinutes(start: string, end: string) {
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();

    const matchDuration = endTime - startTime;
    return Math.floor((matchDuration % 3600000) / 60000);
  }
  private getNumberOfWinsAndLoses(playerId: string, matches: Match[]) {
    const winningMatches = matches
      .filter((match) => match.winner.id === playerId)
      .map((match) => {
        return {
          ...match,
          duration: this.getDurationInMinutes(match.startTime, match.endTime),
        };
      });
    this.wins = winningMatches.length;
    this.loses = matches.length - this.wins;
  }

  private calculateTotalGamesDuration(matches: Match[]) {
    let totalDuration = 0;
    for (const match of matches) {
      const startTime = new Date(match.startTime).getTime();
      const endTime = new Date(match.endTime).getTime();

      // Calculate the duration of the match in milliseconds
      const matchDuration = endTime - startTime;

      // Add the duration of the match to the total duration
      totalDuration += matchDuration;
    }

    // Convert the total duration to hours, minutes, and seconds
    const hours = Math.floor(totalDuration / 3600000);
    const minutes = Math.floor((totalDuration % 3600000) / 60000);

    this.totalTimePlayed = `${hours} hours, ${minutes} minutes`;
  }
}
