import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./components/cardsSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

// The state should have:
// deckOfCards: Will remove a card from the state if it's picked
// playerHand: Cards the player currently has in hand. Needed to calculate total value and will be cleared at the end of each round
// dealerHand: Cards the dealer currently has in hand. Similar to player hand.

// {cards: {
//     deckOfCards:[],
//     playerHand: [],
//     dealerHand: []
// }}
export default store;
