import React from "react";
// Components
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const Card = ({ suit, value }) => {
  const symbol = (s) => {
    switch (s) {
      case "D":
        return "♦";
      case "H":
        return "♥";
      case "C":
        return "♣";
      case "S":
        return "♠";
      default:
        return "err";
    }
  };
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledCardID>
          <div className="value">{value}</div>
          <div className="suit">{symbol(suit)}</div>
        </StyledCardID>
        <StyledCardArt>👑</StyledCardArt>
        <StyledCardIDBottom>
          <div className="value">{value}</div>
          <div className="suit">{symbol(suit)}</div>
        </StyledCardIDBottom>
      </StyledCardContent>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20rem;
  width: 14.5rem;
  padding: 0.5rem;
  background-color: white;
  color: black;
  border-radius: 1.4rem;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.3);
`;

const StyledCardContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const StyledCardID = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  font-size: 2rem;
  line-height: 1;
  .suit {
    margin-top: -0.2rem;
    font-size: 2rem;
  }
`;

const StyledCardArt = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 75%;

  font-size: 8rem;
  border: solid 2px #888;
`;

const StyledCardIDBottom = styled(StyledCardID)`
  transform: rotate(180deg);
  top: auto;
  left: auto;
  bottom: 0;
  right: 0;
`;
export default Card;
