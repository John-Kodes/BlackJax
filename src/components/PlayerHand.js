import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
// Components
import Card from "./Card";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const PlayerHand = () => {
  const playerHand = useSelector((store) => store.cards.playerHand);
  const cards = playerHand.map((card) => {
    return <Card suit={card.suit} value={card.value} key={uuidv4()} />;
  });

  return (
    <>
      <StyledHand>
        {cards
          ? cards.map((card, index) => {
              return (
                <Card1 key={uuidv4()} style={{ left: `${index * 4}rem` }}>
                  {card}
                </Card1>
              );
            })
          : ""}
      </StyledHand>
    </>
  );
};

const StyledHand = styled(motion.div)`
  height: 20rem;
  width: 40%;
  position: relative;
`;

const Card1 = styled.div`
  position: absolute;
  left: 0;
  z-index: 10;
`;

export default PlayerHand;
