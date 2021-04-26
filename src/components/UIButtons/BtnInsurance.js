import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const BtnInsurance = () => {
  return <StyledBtn>🩺 INSURANCE</StyledBtn>;
};

const StyledBtn = styled(motion.button)`
  font-size: 1.6rem;
  padding: 1rem 1.2rem;
`;

export default BtnInsurance;
