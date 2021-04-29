import React, { useEffect, useCallback, useState } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { dealerDrawsCard } from "../cardsSlice";
import { outputResults } from "../gameSlice";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const BtnStand = React.memo(() => {
  const dispatch = useDispatch();

  const [buttonClicked, setButtonClicked] = useState(false);

  const deck = useSelector((store) => store.cards.deckOfCards);
  const dealerHandTotal = useSelector(
    (state) => state.cards.totalHandValue.dealerHand
  );

  const dealerWillPlay = useSelector((store) => store.game.dealerWillPlay);

  const dealerLoop = useCallback(() => {
    setTimeout(() => {
      dispatch(dealerDrawsCard(deck));
    }, 1000);
  }, [dispatch, deck]);

  useEffect(() => {
    if (
      (dealerHandTotal < 17 && buttonClicked) ||
      (dealerHandTotal < 17 && dealerWillPlay)
    )
      dealerLoop();
  }, [dealerHandTotal, dealerLoop, buttonClicked, dealerWillPlay]);

  const toggle = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <StyledBtn onClick={toggle} disabled={buttonClicked}>
      <span>✋</span> STAND
    </StyledBtn>
  );
});

const StyledBtn = styled(motion.button)``;

export default BtnStand;
