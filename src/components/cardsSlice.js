import { createSlice } from "@reduxjs/toolkit";
import deckOfCards from "../deckOfCards";

const initialState = {
  deckOfCards,
  playerHand: [],
  dealerHand: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    removeCardFromDeck(state, action) {
      const deck = state.deckOfCards;
      const index = action.payload.index;
      deck.splice(index, 1);
    },
    playerDrawsCard(state, action) {
      const deck = state.deckOfCards;
      const playerHand = state.playerHand;
      const index = action.payload.index;

      playerHand.push(deck[index]);
    },
    dealerDrawsCard(state, action) {
      const deck = state.deckOfCards;
      const dealerHand = state.dealerHand;
      const index = action.payload.index;

      dealerHand.push(deck[index]);
    },
  },
});

export const {
  removeCardFromDeck,
  playerDrawsCard,
  dealerDrawsCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
