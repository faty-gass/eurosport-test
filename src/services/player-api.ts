import { gql } from "@apollo/client";

export const GET_PLAYERS = gql(`
  query getPlayers {
    players {
      id
      firstname
      lastname
      shortname
      sex
      picture {
        url
      }
      country {
        picture {
          url
        }
        code
      }
      stats {
        rank
        points
        weight
        height
        age
      }
    }
  }
`);

export const GET_GAMES = gql(
  `query getWinningGames{
    matches {
        id
        startTime
        endTime
        players {
          id
          firstname
          lastname
        }
        winner {
          id
        }
      }
  }`,
);
