import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const StandBtn = () => {
  return <StyledBtn>✋ STAND</StyledBtn>;
};

const StyledBtn = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  font-size: 2.4rem;
  font-weight: 600;
  background-color: #13131b;
  border-radius: 4px;
  border: 2px solid transparent;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;

  transition: all 0.1s;

  &:hover {
    transform: scale(1.02) translateY(-0.2rem);
    box-shadow: 0 1.2rem 2rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(1) translateY(0.1rem);
    border: 1px solid #f2ce30;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  }
`;

export default StandBtn;
