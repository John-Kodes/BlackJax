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
  bank: 1000, // There is 2 to avoid weird calculations. I know it's weird but trust me
  tempBank: 1000,
  bet: 0,
  betArr: [0],
  dealerWillPlay: false,
  results: "none", // dealer/player/push/none
  cardsShuffled: false,
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
    playerDoubleDown: {
      reducer(state, action) {
        const deck = state.deckOfCards;
        const playerHand = state.playerHand;
        const index = action.payload.index;
        const bet = state.bet;
        const bank = state.tempBank;

        playerHand.push(deck[index]);
        deck.splice(index, 1);

        let playerTotalValue = playerHand.reduce((acc, cur) => acc + cur.rv, 0);
        const check = playerHand.some((card) => card.value === "A"); // undefined OR card details

        if (check && playerTotalValue < 12) {
          playerTotalValue += 10;
        }

        state.totalHandValue.playerHand = playerTotalValue;
        state.dealerWillPlay = true;

        // 100 > 200
        state.bet = bet * 2;

        // bank 900 > 800
        state.tempBank = bank - bet;

        const dealerHand = state.dealerHand;
        let dealerTotalValue = dealerHand.reduce((acc, cur) => acc + cur.rv, 0);
        const dealerCheck = dealerHand.some((card) => card.value === "A"); // undefined OR card details

        if (dealerCheck && dealerTotalValue < 12) {
          dealerTotalValue += 10;
        }

        state.totalHandValue.dealerHand = dealerTotalValue;
      },

      prepare(deck) {
        const index = Math.trunc(Math.random() * deck.length);

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
      state.cardsShuffled = true;
    },
    cardsShuffled(state) {
      state.cardsShuffled = false;
    },
    loadInBettingScreen(state) {
      state.tempBank = state.bank;
      state.bet = 0;
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
        state.results = "player";

      if (
        (dealerHand <= 21 && dealerHand > playerHand) ||
        (playerHand > 21 && dealerHand <= 22)
      )
        state.results = "dealer";

      if ((dealerHand > 21 && playerHand > 21) || dealerHand === playerHand)
        state.results = "push";
    },

    calcBet: {
      reducer(state, action) {
        const betArr = action.payload.betArr;

        state.betArr = betArr;
        state.bet = state.betArr.reduce((acc, cur) => acc + cur);
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

        const results = state.results;
        const bet = state.bet;
        const bank = state.tempBank;

        if (results === "dealer") state.tempBank = bank;
        if (results === "player") state.tempBank = bet * 2 + bank;
        if (results === "push") state.tempBank = bet + bank;

        // Reseting
        state.results = "none";
        state.bet = 0;
        state.bank = state.tempBank;
        // if LOST: CLEAR bet. Bet from bank has already been subtracted.
        // if WIN: (bet * 2) + bank
        // if PUSH: bet + bank
      },
    },
    startOver(state) {
      state.tempBank = state.bank = 1000;
    },
  },
});

export const {
  distributeCards,
  updateDealerHandTotal,
  playerDrawsCard,
  playerDoubleDown,
  dealerDrawsCard,
  shuffleCards,
  cardsShuffled,

  countCounter,

  loadInBettingScreen,
  dealersTurn,
  outputResults,
  calcBet,
  updateBank,
  concludeGame,
  startOver,
} = gameSlice.actions;

export default gameSlice.reducer;
