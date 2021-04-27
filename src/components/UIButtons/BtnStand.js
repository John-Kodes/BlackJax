import React, { useEffect, useCallback, useState } from "react";

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

  const [buttonClicked, setButtonClicked] = useState(false);

  const deck = useSelector((store) => store.cards.deckOfCards);
  const dealerHandTotal = useSelector(
    (state) => state.cards.totalHandValue.dealerHand
  );

  const dealerLoop = useCallback(() => {
    setTimeout(() => {
      const index = Math.trunc(Math.random() * deck.length) + 1;
      dispatch(dealerDrawsCard({ index }));
    }, 1000);
  }, [dispatch, deck.length]);

  useEffect(() => {
    if (dealerHandTotal < 17 && buttonClicked) dealerLoop();
  }, [dealerHandTotal, dealerLoop, buttonClicked]);

  const toggle = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <StyledBtn onClick={toggle} disabled={buttonClicked}>
      <span>✋</span> STAND
    </StyledBtn>
  );
};

const StyledBtn = styled(motion.button)``;

export default BtnStand;
