import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { playerDrawsCard, removeCardFromDeck } from "./cardsSlice";

const BtnHit = () => {
  const deck = useSelector((store) => store.cards.deckOfCards);
  const dispatch = useDispatch();

  const drawCardHandler = () => {
    const index = Math.trunc(Math.random() * deck.length) + 1;
    dispatch(playerDrawsCard({ index }));
    dispatch(removeCardFromDeck({ index }));
  };

  return <StyledBtn onClick={drawCardHandler}>🎯 HIT</StyledBtn>;
};

const StyledBtn = styled(motion.button)``;

export default BtnHit;
