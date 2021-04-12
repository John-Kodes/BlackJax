import React from "react";
// Components
import Card from "../components/Card";
import deckOfCards from "../deckOfCards";
import UI from "./UI";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const Board = () => {
  const createCardHandler = () => {
    const cardNumber = Math.trunc(Math.random() * deckOfCards.length + 1);

    return (
      <Card
        suit={deckOfCards[cardNumber].suit}
        value={deckOfCards[cardNumber].value}
        img={deckOfCards[cardNumber].img}
      />
    );
  };

  return (
    <StyledBoardOut>
      <StyledBoardBorder>
        <StyledBoardIn>
          <UI />
          <DealerHand card={createCardHandler()}></DealerHand>
          <PlayerHand card={createCardHandler()}></PlayerHand>
        </StyledBoardIn>
      </StyledBoardBorder>
    </StyledBoardOut>
  );
};

const StyledBoardOut = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #1f1d22, #15101b);
  border-radius: 0.4rem;
  max-height: 70rem;
  max-width: 94.4rem;
  height: 100%;
  width: 100%;
  padding: 2.8rem;
`;

const StyledBoardIn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.primaryColor};
  height: 100%;
  width: 100%;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 0.4rem;
`;

const StyledBoardBorder = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: ${(props) => props.theme.borderGold};
  border-radius: 0.4rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.4);
`;

export default Board;
