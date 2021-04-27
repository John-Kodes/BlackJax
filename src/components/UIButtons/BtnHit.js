import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { playerDrawsCard } from "../cardsSlice";

const BtnHit = () => {
  const deck = useSelector((store) => store.cards.deckOfCards);
  const dispatch = useDispatch();
  const playerHandTotal = useSelector(
    (store) => store.cards.totalHandValue.playerHand
  );

  const drawCardHandler = () => {
    const index = Math.trunc(Math.random() * deck.length) + 1;
    dispatch(playerDrawsCard({ index }));
  };

  return (
    <StyledBtn onClick={drawCardHandler} disabled={playerHandTotal > 20}>
      🎯 HIT
    </StyledBtn>
  );
};

const StyledBtn = styled(motion.button)``;

export default BtnHit;
