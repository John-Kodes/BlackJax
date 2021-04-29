import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const BtnInsurance = () => {
  const resetRound = () => {
    return "sdfs";
  };

  return <StyledBtn onClick={resetRound}>🩺 RESET</StyledBtn>;
};

const StyledBtn = styled(motion.button)`
  font-size: 2.4rem;
  padding: 0.6rem 1.2rem;
`;

export default BtnInsurance;
