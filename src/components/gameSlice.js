import { createSlice } from "@reduxjs/toolkit";
import deckOfCards from "../data/deckOfCards";

const newDeck = [...deckOfCards];

const initialState = {
  deckOfCards,
  playerHand: [],
  dealerHand: [],
  totalHandValue: {
    dealerHand: 0,
    playerHand: 0,
  },
  count: 0,
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
    distributeCards: {
      reducer(state, action) {
        const deck = state.deckOfCards;
        const dealerHand = state.dealerHand;
        const playerHand = state.playerHand;

        const { index } = action.payload;

        // DEALER LOGIC______________________________________________________
        if (dealerHand.length < 2) {
          // adding card to dealerHand and removing same card from deck
          dealerHand.push(deck[index]);
          deck.splice(index, 1);

          // calculating dealerHandtotal
          if (!dealerHand[1]) return;
          let playerTotalValue = dealerHand[1].rv;
          const check = dealerHand.some((card) => card.value === "A"); // undefined OR card details

          // should be done after hiding card
          if (check && playerTotalValue < 12) {
            playerTotalValue += 10;
          }

          state.totalHandValue.dealerHand = playerTotalValue;

          // PLAYER LOGIC______________________________________________________
        } else if (playerHand.length < 2) {
          playerHand.push(deck[index]);
          deck.splice(index, 1);

          let playerTotalValue = playerHand.reduce(
            (acc, cur) => acc + cur.rv,
            0
          );
          const check = playerHand.some((card) => card.value === "A"); // undefined OR card details

          if (check && playerTotalValue < 12) {
            playerTotalValue += 10;
          }

          state.totalHandValue.playerHand = playerTotalValue;
        }
      },

      prepare(deck) {
        const index = Math.trunc(Math.random() * deck.length);
        // console.log(index, deck.length);
        return {
          payload: {
            index,
          },
        };
      },
    },
    updateDealerHandTotal(state) {
      const dealerHand = state.dealerHand;

      let dealerTotalValue = dealerHand.reduce((acc, cur) => acc + cur.rv, 0);
      // Checking for Ace cards
      const check = dealerHand.some((card) => card.value === "A");

      // Calculating Ace card value
      if (check && dealerTotalValue < 12) {
        dealerTotalValue += 10;
      }

      state.totalHandValue.dealerHand = dealerTotalValue;
    },
    playerDrawsCard: {
      reducer(state, action) {
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

      prepare(deck) {
        const index = Math.trunc(Math.random() * deck.length);
        // console.log(index, deck.length);

        return {
          payload: {
            index,
          },
        };
      },
    },

    dealerDrawsCard: {
      reducer(state, action) {
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
      prepare(deck) {
        const index = Math.trunc(Math.random() * deck.length);
        // console.log(index, deck.length);

        return {
          payload: {
            index,
          },
        };
      },
    },
    countCounter: {
      reducer(state, action) {
        const change = action.payload.change;

        state.count += change;
      },

      prepare(change) {
        return {
          payload: {
            change,
          },
        };
      },
    },
    shuffleCards(state) {
      state.deckOfCards = newDeck;
    },
    dealersTurn(state) {
      const dealerHand = state.dealerHand;
      let dealerTotalValue = dealerHand.reduce((acc, cur) => acc + cur.rv, 0);
      const check = dealerHand.some((card) => card.value === "A"); // undefined OR card details

      if (check && dealerTotalValue < 12) {
        dealerTotalValue += 10;
      }

      state.totalHandValue.dealerHand = dealerTotalValue;

      state.dealerWillPlay = true;
    },
    outputResults(state) {
      const { playerHand, dealerHand } = state.totalHandValue;

      if (
        (playerHand <= 21 && playerHand > dealerHand) ||
        (dealerHand > 21 && playerHand <= 22)
      )
        state.winnerResult = "player";

      if (
        (dealerHand <= 21 && dealerHand > playerHand) ||
        (playerHand > 21 && dealerHand <= 22)
      )
        state.winnerResult = "dealer";

      if ((dealerHand > 21 && playerHand > 21) || dealerHand === playerHand)
        state.winnerResult = "push";
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
    concludeGame: {
      reducer(state) {
        state.dealerHand = [];
        state.playerHand = [];
        state.totalHandValue = {
          dealerHand: 0,
          playerHand: 0,
        };

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
    },
  },
});

export const {
  distributeCards,
  updateDealerHandTotal,
  playerDrawsCard,
  dealerDrawsCard,
  shuffleCards,

  countCounter,

  dealersTurn,
  outputResults,
  calcBet,
  updateBank,
  concludeGame,
} = gameSlice.actions;

export default gameSlice.reducer;
