import { createSlice } from "@reduxjs/toolkit";

// this slice will contain everything related to the game state like money

const initialState = {
  bank: 0,
  bet: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

export const {} = gameSlice.actions;

export default gameSlice.reducer;
