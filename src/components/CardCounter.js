import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const CardCounter = () => {
  const btnHover = {
    y: -3,
    scale: 1.2,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
    filter: "brightness(5) hue-rotate(-10deg)",
  };

  return (
    <>
      <StyledButton whileHover={btnHover}>
        <span>-</span>
      </StyledButton>
      <StyledCounterBox>
        <div>
          Count: <span>00</span>
        </div>
        <div>
          True Count: <span>00</span>
        </div>
      </StyledCounterBox>
      <StyledButton whileHover={btnHover}>+</StyledButton>
    </>
  );
};

const StyledCounterBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2.2rem;
  padding: 0 1rem;
  height: 12rem;
  width: 18rem;
  border-radius: 4px;

  background-color: ${(props) => props.theme.UIElementColor};
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.4);

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    div &:not(span) {
      font-weight: 600;
    }
  }
`;

const StyledButton = styled(motion.button)`
  all: unset;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  line-height: 0.5;
  height: 4rem;
  width: 4rem;
  z-index: 9999;
  border-radius: 100%;
  background-color: ${(props) => props.theme.UIElementColor};

  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  span {
    margin-top: -6px;
  }

  &:active {
    border: none;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  }
`;

export default CardCounter;
