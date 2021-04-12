import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const DealerHand = ({ card }) => {
  return (
    <>
      <StyledDealerHand>
        <Card1 className="1">{card}</Card1>
        <Card2 className="2">{card}</Card2>
        <Card3 className="3">{card}</Card3>
        <Card4 className="4">{card}</Card4>
        <Card5 className="5">{card}</Card5>
      </StyledDealerHand>
    </>
  );
};

const StyledDealerHand = styled(motion.div)`
  height: 20rem;
  width: 40%;
  position: relative;
`;

const Card1 = styled.div`
  position: absolute;
  left: 0;
  z-index: 10;
`;

const Card2 = styled(Card1)`
  left: 4rem;
`;

const Card3 = styled(Card1)`
  left: 8rem;
`;

const Card4 = styled(Card1)`
  left: 12rem;
`;

const Card5 = styled(Card1)`
  left: 16rem;
`;

const Card6 = styled(Card1)`
  left: 20rem;
`;

export default DealerHand;
