import { createSlice } from "@reduxjs/toolkit";

// this slice will contain everything related to the game state like money, win/lose

const initialState = {
  bank: 0,
  bet: 0,
  dealerWillPlay: false,
  winnerResult: "player", // dealer/player/draw/none
  TurnsState: {
    player: "playing", // waiting/playing/finished
    dealer: "waiting",
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    dealersTurn(state) {
      state.dealerWillPlay = true;
    },
    outputResults: {
      reducer(state, action) {
        const { playerTotal } = action.payload;
        const { dealerTotal } = action.payload;

        if (playerTotal <= 21 && playerTotal > dealerTotal)
          state.winnerResult = "player";
        if (dealerTotal <= 21 && dealerTotal > playerTotal)
          state.winnerResult = "dealer";
        if (dealerTotal > 21 && playerTotal > 21) state.winnerResult = "push";
      },
      prepare(playerTotal, dealerTotal) {
        return {
          payload: {
            playerTotal,
            dealerTotal,
          },
        };
      },
    },
    resetRound(state) {
      state.dealerWillPlay = false;
    },
  },
});

export const { dealersTurn, outputResults } = gameSlice.actions;

export default gameSlice.reducer;
