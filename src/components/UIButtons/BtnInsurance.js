import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { outputResults } from "../gameSlice";

const BtnInsurance = () => {
  const dispatch = useDispatch();

  const playerTotal = useSelector(
    (state) => state.cards.totalHandValue.playerHand
  );
  const dealerTotal = useSelector(
    (state) => state.cards.totalHandValue.dealerHand
  );

  const toggle = () => {
    dispatch(outputResults(playerTotal, dealerTotal));
  };

  return <StyledBtn onClick={toggle}>🩺 RESET</StyledBtn>;
};

const StyledBtn = styled(motion.button)`
  font-size: 2.4rem;
  padding: 0.6rem 1.2rem;
`;

export default BtnInsurance;
