import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../data/api-schema";
import { PlayerData } from "../data/player-data";

interface playerState {
  value: PlayerData[];
}
const initialState: playerState = { value: [] };

export const playerStore = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      const listPlayerData: PlayerData[] = [];
      action.payload.players.forEach((player: Player) => {
        listPlayerData.push(new PlayerData(player, action.payload.matches));
      });
      state.value = listPlayerData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlayers } = playerStore.actions;

export default playerStore.reducer;
