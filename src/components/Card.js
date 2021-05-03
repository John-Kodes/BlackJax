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
      {console.log("card component being re-rendered")}
      <StyledCardContent>
        <StyledCardID>
          <div
            className="value"
            style={{
              color: `${
                suit === "D" ? "#e78b00" : suit === "H" ? "#e78b00" : "black"
              }`,
            }}
          >
            {value}
          </div>
          <div
            className="suit"
            style={{
              color: `${
                suit === "D" ? "#e78b00" : suit === "H" ? "#e78b00" : "black"
              }`,
            }}
          >
            {symbol(suit)}
          </div>
        </StyledCardID>
        <StyledCardArt>👑</StyledCardArt>
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
  padding: 1rem;
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
  top: -0.2rem;
  left: 0;

  font-size: 4rem;
  line-height: 1;

  .suit {
    margin-top: -0.2rem;
    font-size: 3rem;
  }
`;

const StyledCardArt = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  font-size: 8rem;

  position: absolute;
  bottom: 0;
`;

export default Card;
