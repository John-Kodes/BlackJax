import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bank: 0,
  bet: 0,
  TotalHandValue: {
    dealerHand: 0,
    playerHand: 0,
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playerTotalValueAdd(state, action) {
      const cards = action.payload.cards;
      let playerTotalValue = cards.reduce((acc, cur) => acc + cur.rv, 0);
      const check = cards.some((card) => card.value === "A"); // undefined OR card details

      if (check && playerTotalValue < 12) {
        playerTotalValue += 10;
      }

      state.TotalHandValue.playerHand = playerTotalValue;
    },

    dealerTotalValueAdd(state, action) {
      const cards = action.payload.cards;
      let dealerTotalValue = cards.reduce((acc, cur) => acc + cur.rv, 0);
      const check = cards.some((card) => card.value === "A"); // undefined OR card details

      if (check && dealerTotalValue < 12) {
        dealerTotalValue += 10;
      }

      state.TotalHandValue.dealerHand = dealerTotalValue;
    },

    TotalValueResetAll(state, action) {
      state.TotalHandValue.playerHand = 0;
      state.TotalHandValue.dealerHand = 0;
    },
  },
});

export const {
  playerTotalValueAdd,
  TotalValueResetAll,
  dealerTotalValueAdd,
} = gameSlice.actions;

export default gameSlice.reducer;
