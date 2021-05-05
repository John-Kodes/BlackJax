import React, { useEffect, useCallback, useState } from "react";
// Styling
import { PlayingBtn } from "../../Globals/GlobalStyles";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { dealerDrawsCard, resetCards } from "../cardsSlice";
import { dealersTurn, outputResults, resetGame } from "../gameSlice";

const BtnStand = React.memo(() => {
  const dispatch = useDispatch();

  // STATES
  const [buttonClicked, setButtonClicked] = useState(false);

  const deck = useSelector((store) => store.cards.deckOfCards);
  const dealerHandTotal = useSelector(
    (state) => state.cards.totalHandValue.dealerHand
  );
  const playerHandTotal = useSelector(
    (state) => state.cards.totalHandValue.playerHand
  );
  const results = useSelector((state) => state.game.winnerResult);
  const dealerWillPlay = useSelector((store) => store.game.dealerWillPlay);

  //////////////////////// FUNCTIONS

  // DEALER DRAWS CARD
  const dealerLoop = useCallback(() => {
    setTimeout(() => {
      dispatch(dealerDrawsCard(deck));
    }, 750);
  }, [dispatch, deck]);

  // RESET ROUND
  const resetRound = useCallback(() => {
    setTimeout(() => {
      dispatch(resetGame());
      dispatch(resetCards());
    }, 4000);
  }, [dispatch]);

  // SHOWING RESULTS POPUP
  const dipatchResults = useCallback(() => {
    setTimeout(() => {
      dispatch(outputResults(playerHandTotal, dealerHandTotal));
      setButtonClicked(false);
    }, 1500);
    resetRound();
  }, [playerHandTotal, resetRound, dealerHandTotal, dispatch]);

  // onClick handler
  const toggle = () => {
    dispatch(dealersTurn());
    setButtonClicked(true);
  };

  // Dealer loop logic
  useEffect(() => {
    if (
      (dealerHandTotal < 17 && buttonClicked) ||
      (dealerHandTotal < 17 && dealerWillPlay)
    )
      dealerLoop();
    else if (dealerHandTotal > 0 && dealerWillPlay && results === "none")
      dipatchResults();
  }, [
    dealerHandTotal,
    dealerLoop,
    buttonClicked,
    dealerWillPlay,
    dipatchResults,
    results,
  ]);

  return (
    <PlayingBtn onClick={toggle} disabled={buttonClicked}>
      <span>✋</span> STAND
    </PlayingBtn>
  );
});

export default BtnStand;
