import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerStore";

export const store = configureStore({
  reducer: {
    players: playerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// fetching store for component testing
export const getStore = () =>
  configureStore({
    reducer: {
      players: playerReducer,
    },
  });
// @ts-ignore
window.store = store;
