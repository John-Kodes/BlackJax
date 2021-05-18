import { createSlice } from "@reduxjs/toolkit";

// this slice will contain everything related to the game state like money, win/lose

const initialState = {
  bank: 1000,
  tempBank: 1000,
  bet: 0,
  betArr: [0],
  dealerWillPlay: false,
  winnerResult: "none", // dealer/player/push/none
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
    calcBet: {
      reducer(state, action) {
        const betArr = action.payload.betArr;

        state.betArr = betArr;
        state.bet = betArr.reduce((acc, cur) => acc + cur);
        state.tempBank = state.bank - state.bet;
      },
      prepare(betArr) {
        return {
          payload: {
            betArr,
          },
        };
      },
    },
    updateBank: {
      reducer(state) {
        state.bank = state.tempBank;
      },
      prepare(bet = 0) {
        return {
          payload: {
            bet,
          },
        };
      },
    },
    resetGame: {
      reducer(state) {
        state.dealerWillPlay = false;

        const results = state.winnerResult;
        const bet = state.bet;
        const bank = state.tempBank;

        if (results === "dealer") state.bet = 0;
        if (results === "player") state.bank = bet * 2 + bank;
        if (results === "push") state.bank = bet + bank;

        state.winnerResult = "none";
        state.bet = 0;
        state.tempBank = state.bank;
        // if LOST: CLEAR bet. Bet from bank has already been subtracted.
        // if WIN: (bet * 2) + bank
        // if PUSH: bet + bank
      },
      prepare() {
        return {
          payload: {},
        };
      },
    },
  },
});

export const {
  dealersTurn,
  outputResults,
  calcBet,
  updateBank,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
