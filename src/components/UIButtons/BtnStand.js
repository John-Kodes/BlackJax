import React from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { dealerDrawsCard } from "../cardsSlice";
import {} from "../gameSlice";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const BtnStand = () => {
  const dispatch = useDispatch();

  const deck = useSelector((store) => store.cards.deckOfCards);
  const dealerHandTotal = useSelector(
    (store) => store.cards.totalHandValue.dealerHand
  );

  const dealerLoop = () => {
    setTimeout(() => {
      const index = Math.trunc(Math.random() * deck.length) + 1;
      dispatch(dealerDrawsCard({ index }));
      console.log(dealerHandTotal);
      if (dealerHandTotal < 17) dealerLoop();
    }, 1000);
  };

  //// __________________________________

  // const cardsToAdd = [];
  // for (let dealtCards = 0; dealtCards + dealerHandTotal < 3; dealtCards++) {
  //   const index = Math.trunc(Math.random() * (deck.length - dealtCards)) + 1;
  //   cardsToAdd.push(index);
  //   console.log(dealtCards, dealerHandTotal);
  // }
  // dispatch(dealerDrawsCard({ indexArr: cardsToAdd }));

  return <StyledBtn onClick={dealerLoop}>✋ STAND</StyledBtn>;
};

const StyledBtn = styled(motion.button)``;

export default BtnStand;
