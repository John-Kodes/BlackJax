import { createSlice } from "@reduxjs/toolkit";
import deckOfCards from "../deckOfCards";

// This slice will contain EVERYTHING about the cards

const initialState = {
  deckOfCards,
  playerHand: [],
  dealerHand: [],
  totalHandValue: {
    dealerHand: 0,
    playerHand: 0,
  },
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    playerDrawsCard(state, action) {
      const deck = state.deckOfCards;
      const playerHand = state.playerHand;
      const index = action.payload.index;

      playerHand.push(deck[index]);
      deck.splice(index, 1);

      let playerTotalValue = playerHand.reduce((acc, cur) => acc + cur.rv, 0);
      const check = playerHand.some((card) => card.value === "A"); // undefined OR card details

      if (check && playerTotalValue < 12) {
        playerTotalValue += 10;
      }

      state.totalHandValue.playerHand = playerTotalValue;
    },

    dealerDrawsCard(state, action) {
      const deck = state.deckOfCards;
      const dealerHand = state.dealerHand;
      const index = action.payload.index;

      dealerHand.push(deck[index]);
      deck.splice(index, 1);

      let dealerTotalValue = dealerHand.reduce((acc, cur) => acc + cur.rv, 0);
      const check = dealerHand.some((card) => card.value === "A"); // undefined OR card details

      if (check && dealerTotalValue < 12) {
        dealerTotalValue += 10;
      }

      state.totalHandValue.dealerHand = dealerTotalValue;
    },
  },
});

export const { playerDrawsCard, dealerDrawsCard } = cardsSlice.actions;

export default cardsSlice.reducer;
