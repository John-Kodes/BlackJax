import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./components/cardsSlice";
import gameReducer from "./components/gameSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    game: gameReducer,
  },
});
// {cards: {
//     deckOfCards:[],
//     playerHand: [],
//     dealerHand: []
// }}
// {
//   game:{
//     bank: 0,
//     bet: 0,
//     TotalValue: 0,
//   }
// }
export default store;
