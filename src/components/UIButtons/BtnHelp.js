import React, { useState } from "react";
// Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";

const btnHelpAnim = {
  hover: {
    y: -4,
  },
  tap: {
    y: 2,
  },
};

const BtnHelp = () => {
  const [showHelp, setShowHelp] = useState(false);

  const toggle = () => {
    setShowHelp(!showHelp);
  };

  return (
    <StyledBtnHelp
      variants={btnHelpAnim}
      whileHover="hover"
      whileTap="tap"
      onClick={toggle}
    >
      {showHelp ? (
        <Instructions>
          <h2>How to play</h2>
          <p>
            The goal of the game is to get your card total (show at the bottom
            left of the screen) as close as possible to 21 or exactly,
            otherwise, you lose if you go past it.
            <br />
            <br />
            All face cards have a value of 10 but Ace cards can either be 1 OR
            11.
            {/* <br />
            <br />
            The "True Count" is a strategy used by advanced players to
            calculated their odds to see if it's in their favor or not. Normally
            advanced players calculate it in their head but in this web app, its
            calculated automatically.
            <br />
            <br />
            If the True Count is postive, the next card is more likely to be a
            10 or higher.
            <br />
            If its negative, the next card is more likely to be 6 or less. */}
          </p>
        </Instructions>
      ) : (
        "?"
      )}
    </StyledBtnHelp>
  );
};

const Instructions = styled(motion.div)`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: justify;
  color: white;
  width: 30ch;

  h2 {
    position: relative;
    text-align: center;
    margin-bottom: 1rem;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      height: 1px;
      width: 20%;
      background-color: #7f7597;
    }
  }
`;

const StyledBtnHelp = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;

  background-color: transparent;
  border: 1px solid #7f7597;
  color: #7f7597;
  border-radius: 4px;
  padding: 1.3rem 2rem;
  z-index: 90;

  backdrop-filter: blur(1.5px) brightness(50%);

  transition: color 0.3s;

  @media only screen and (max-width: 71.5em) {
    top: 6rem;
  }
  @media only screen and (max-width: 58.5em) {
    top: 5rem;
  }

  &:hover {
    color: white;
  }
`;

export default BtnHelp;
