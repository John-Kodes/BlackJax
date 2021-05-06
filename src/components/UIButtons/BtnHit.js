import React, { useEffect } from "react";
// Styling
import { PlayingBtn } from "../../Globals/GlobalStyles";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { playerDrawsCard } from "../cardsSlice";
import { dealersTurn } from "../gameSlice";

const BtnHit = React.memo(() => {
  const dispatch = useDispatch();

  const deck = useSelector((store) => store.cards.deckOfCards);
  const playerHandTotal = useSelector(
    (store) => store.cards.totalHandValue.playerHand
  );
  const playerHandLength = useSelector((store) => store.cards.playerHand)
    .length;

  const dealerWillPlay = useSelector((store) => store.game.dealerWillPlay);
  // const result = useSelector((store) => store.game.winnerResult);

  const drawCardHandler = () => {
    dispatch(playerDrawsCard(deck));
  };

  // Dealer loop logic
  useEffect(() => {
    if (playerHandTotal > 20) {
      dispatch(dealersTurn());
    }
  }, [dispatch, playerHandTotal]);

  return (
    <PlayingBtn
      onClick={drawCardHandler}
      disabled={playerHandTotal > 20 || dealerWillPlay || playerHandLength < 2}
    >
      🎯 HIT
    </PlayingBtn>
  );
});

export default BtnHit;
