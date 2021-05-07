import React from "react";
// Components
// Styling
import styled from "styled-components";
import BtnDeal from "./UIButtons/BtnDeal";
// Animation
import { motion } from "framer-motion";
// Redux
// import { useSelector } from "react-redux";s

const BettingScreen = () => {
  return (
    <StyledBackDrop>
      <StyledBettingScreen>
        <StyledBank>Bank: $0</StyledBank>
        <StyledCalcBox>PLACEHOLDER TEXT</StyledCalcBox>
        <StyledBetBox>
          <h1>$888</h1>
          <BtnDeal />
        </StyledBetBox>
      </StyledBettingScreen>
    </StyledBackDrop>
  );
};

const StyledCalcBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-right: 2rem;
  border-radius: 4px;

  background-color: rgba(0, 128, 128, 0.192);
`;

const StyledBetBox = styled(motion.div)`
  flex: 0 0 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 4rem;
  background-color: rgba(119, 103, 85, 0.349);
  border-radius: 4px;
`;

const StyledBank = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 3rem;
  font-weight: 600;
  padding: 0.2rem 1rem 0.2rem 3rem;
  color: #775100;

  background-color: #f2ce30;
  clip-path: polygon(2.5rem 0, 100% 0, 100% 100%, 0% 100%);
`;

const StyledBettingScreen = styled(motion.div)`
  display: flex;

  background-color: rgba(133, 92, 17, 0.178);
  height: 60rem;
  width: 100rem;
  border-radius: 4px;
  border: 1px solid #f2ce30;
  padding: 2rem;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
`;

const StyledBackDrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(3px) opacity(80%);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export default BettingScreen;
