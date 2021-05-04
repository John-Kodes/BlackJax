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

  const dealerWillPlay = useSelector((store) => store.game.dealerWillPlay);

  const drawCardHandler = () => {
    dispatch(playerDrawsCard(deck));
  };

  useEffect(() => {
    if (playerHandTotal > 20 && !dealerWillPlay) dispatch(dealersTurn());
  }, [dispatch, playerHandTotal, dealerWillPlay]);

  // const playingBtnAnim = {
  //   initial: { y: 0 },
  //   animate: { y: 0 },
  //   hover: {
  //     y: -3,
  //     transition: {
  //       duration: 0.1,
  //       type: "tween",
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  return (
    <PlayingBtn
      // variants={playingBtnAnim}
      // initial="initial"
      // animate="animate"
      // whileHover="hover"
      onClick={drawCardHandler}
      disabled={playerHandTotal > 20 || dealerWillPlay}
    >
      🎯 HIT
    </PlayingBtn>
  );
});

export default BtnHit;
