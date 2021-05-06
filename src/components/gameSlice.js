import { createSlice } from "@reduxjs/toolkit";

// this slice will contain everything related to the game state like money, win/lose

const initialState = {
  bank: 0,
  bet: 0,
  dealerWillPlay: false,
  winnerResult: "none", // dealer/player/draw/none
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

        if (
          (playerTotal <= 21 && playerTotal > dealerTotal) ||
          (dealerTotal > 21 && playerTotal <= 22)
        )
          state.winnerResult = "player";

        if (
          (dealerTotal <= 21 && dealerTotal > playerTotal) ||
          (playerTotal > 21 && dealerTotal <= 22)
        )
          state.winnerResult = "dealer";

        if (
          (dealerTotal > 21 && playerTotal > 21) ||
          dealerTotal === playerTotal
        )
          state.winnerResult = "push";
        // console.log("err", playerTotal, dealerTotal, state.winnerResult);
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
    resetGame(state) {
      state.dealerWillPlay = false;
      state.winnerResult = "none";
    },
  },
});

export const { dealersTurn, outputResults, resetGame } = gameSlice.actions;

export default gameSlice.reducer;