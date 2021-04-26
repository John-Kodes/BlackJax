import React from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { dealerDrawsCard, removeCardFromDeck } from "../cardsSlice";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const BtnStand = () => {
  const deck = useSelector((store) => store.cards.deckOfCards);
  const dispatch = useDispatch();
  const dealerHandTotal = useSelector(
    (store) => store.game.TotalHandValue.dealerHand
  );

  const drawCardHandler = () => {
    const index = Math.trunc(Math.random() * deck.length) + 1;
    dispatch(dealerDrawsCard({ index }));
    dispatch(removeCardFromDeck({ index }));
  };

  // dealer logic
  // loop: draw if dealerHand < 17. Else, stand/push
  const dealerPlays = () => {
    let x = 0;
    while (x < 5) {
      drawCardHandler();
      x++;
    }
  };

  return <StyledBtn onClick={dealerPlays}>✋ STAND</StyledBtn>;
};

const StyledBtn = styled(motion.button)``;

export default BtnStand;
