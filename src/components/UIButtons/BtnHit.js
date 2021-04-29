import React, { useEffect } from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
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
  console.log(playerHandTotal, dealerWillPlay);

  useEffect(() => {
    if (playerHandTotal > 20 && !dealerWillPlay) dispatch(dealersTurn());
  });

  return (
    <StyledBtn onClick={drawCardHandler} disabled={playerHandTotal > 20}>
      🎯 HIT
    </StyledBtn>
  );
});

const StyledBtn = styled(motion.button)``;

export default BtnHit;
