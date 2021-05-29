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
      className="help--btn"
    >
      {showHelp ? (
        <Instructions>
          <h2>How to play</h2>
          <p>
            The goal of the game is to get your card total (shown at the bottom
            left of the screen) closer to 21 than the dealer's card total. Going
            over 21 will make you lose the round.
            <br />
            <br />
            All face cards have a value of 10 but Ace cards can either be 1 OR
            11. If you are lucky and get a 10 card and an Ace, that is a
            'BlackJack' which wins you +50% of your original bet if the dealer
            also doesn't get 21 points.
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

  &:hover {
    color: white;
  }
`;

export default BtnHelp;
