import React, { useEffect, useCallback, useState } from "react";
// Styling
import { PlayingBtn } from "../../Globals/GlobalStyles";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { dealerDrawsCard, resetCards, distributeCards } from "../cardsSlice";
import { dealersTurn, outputResults, resetGame } from "../gameSlice";

// Currently, most or if not, all the dealer logic is in this component.
// It also automatically moves to the next round. I should have it automatically bring up the
// BettingScreen instead and also move the dealer logic to a different file... or maybe leave it here idk

const BtnStand = ({ setShowBettingScreen, showBettingScreen }) => {
  const dispatch = useDispatch();

  // STATES
  const [buttonClicked, setButtonClicked] = useState(false);
  const [dealerLoopBool, setDealerLoopBool] = useState(false);

  const deck = useSelector((store) => store.cards.deckOfCards);
  const dealerHandTotal = useSelector(
    (state) => state.cards.totalHandValue.dealerHand
  );
  const playerHandTotal = useSelector(
    (state) => state.cards.totalHandValue.playerHand
  );
  const playerHandLength = useSelector((state) => state.cards.playerHand)
    .length;
  const results = useSelector((state) => state.game.winnerResult);
  const dealerWillPlay = useSelector((store) => store.game.dealerWillPlay);

  //////////////////////// FUNCTIONS

  // DEALER DRAWS CARD
  const dealerLoop = useCallback(
    (time = 5) => {
      setTimeout(() => {
        dispatch(dealerDrawsCard(deck));
      }, time * 1000);
    },
    [dispatch, deck]
  );

  const startDealerLoop = (time = 5) => {
    setTimeout(() => setDealerLoopBool(true), time * 1000);
  };

  // RESET ROUND
  const resetRound = useCallback(
    (time = 5) => {
      setTimeout(() => {
        setDealerLoopBool(false);
        setShowBettingScreen(true);
        dispatch(resetCards());
        dispatch(resetGame());
        //// I think this can happen in the resetCards()
        // if LOST: CLEAR bet. Bet from bank has already been subtracted.
        // if WIN: (bet * 2) + bank
        // if PUSH: bet + bank
      }, time * 1000);
    },
    [dispatch, setShowBettingScreen]
  );

  // START NEXT ROUND
  const dealCards = (time = 5) => {
    setTimeout(() => {
      dispatch(distributeCards(deck));
    }, time * 1000);
  };

  // SHOWING RESULTS POPUP
  const dipatchResults = useCallback(
    (time = 5) => {
      setTimeout(() => {
        dispatch(outputResults(playerHandTotal, dealerHandTotal));
        setButtonClicked(false);
      }, time * 1000);
      resetRound(4);
    },
    [playerHandTotal, resetRound, dealerHandTotal, dispatch]
  );

  // onClick handler
  const toggle = () => {
    setButtonClicked(true);
    dispatch(dealersTurn());
  };

  // Dealer loop logic
  useEffect(() => {
    if (playerHandLength < 2 && !showBettingScreen) {
      dealCards(0.5);
    } else if (
      (dealerHandTotal < 17 && buttonClicked && !dealerLoopBool) ||
      (dealerHandTotal < 17 && dealerWillPlay && !dealerLoopBool)
    ) {
      startDealerLoop(0.5);
    } else if (
      (dealerHandTotal < 17 && buttonClicked && dealerLoopBool) ||
      (dealerHandTotal < 17 && dealerWillPlay && dealerLoopBool)
    )
      dealerLoop(0.75);
    else if (dealerHandTotal > 0 && dealerWillPlay && results === "none") {
      dipatchResults(1.5);
    }
  });

  return (
    <PlayingBtn
      onClick={toggle}
      disabled={buttonClicked || playerHandTotal < 1 || playerHandTotal > 20}
    >
      <span>✋</span> STAND
    </PlayingBtn>
  );
};

export default React.memo(BtnStand);
