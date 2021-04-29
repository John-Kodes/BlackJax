import React from "react";
// REDUX
import { useSelector } from "react-redux";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const RoundResults = () => {
  const results = useSelector((state) => state.game.winnerResult);
  let text = "";
  switch (results) {
    case "draw":
      text = "PUSH";
      break;
    case "dealer":
      text = "DEALER WINS";
      break;
    case "player":
      text = "YOU WIN";
      break;
    case "none":
      text = "";
      break;
    default:
      text = "err";
  }

  return (
    <>
      <StyledRoundResults>{text}</StyledRoundResults>
    </>
  );
};

const StyledRoundResults = styled(motion.div)`
  position: fixed;
  font-size: 9rem;
  padding: 1rem 5rem;
  border: 1px solid yellow;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primaryColor}aa;
  box-shadow: 0 2rem 4rem rgba(3, 0, 17, 0.404);
  z-index: 9999;

  backdrop-filter: blur(2px) brightness(180%) invert(90%) opacity(80%);
`;

export default RoundResults;
