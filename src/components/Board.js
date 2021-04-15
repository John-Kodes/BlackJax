import React from "react";
import { useSelector } from "react-redux";
// UUID
import { v4 as uuidv4 } from "uuid";
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
  const cards = useSelector((store) => store.drawnCards);
  const cardPicker = () => {
    return Math.trunc(Math.random() * deckOfCards.length + 1);
  };

  // Temp
  const createCardHandler = () => {
    const cardNum = cardPicker();

    console.log(deckOfCards[cardNum]);
    return (
      <Card
        suit={deckOfCards[cardNum].suit}
        value={deckOfCards[cardNum].value}
        img={deckOfCards[cardNum].img}
      />
    );
  };

  // New plan, we randomly pick a card from the deck, we add it to the drawn cards state, and render that state.
  const renderNewCard = () => {
    if (cards.length === 0) return;

    const drawnCards = cards.map((card) => {
      return <Card suit={card.suit} value={card.value} key={uuidv4()} />;
    });

    console.log(drawnCards);
    return drawnCards;
  };

  return (
    <StyledBoardOut>
      <StyledBoardBorder>
        <StyledBoardIn>
          <UI />
          <DealerHand card={createCardHandler()}></DealerHand>
          <PlayerHand cards={renderNewCard()}></PlayerHand>
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
  box-shadow: 0 3rem 8rem rgba(0, 0, 0, 0.7);
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
