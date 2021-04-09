import React from "react";
// Components
import Card from "../components/Card";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const Board = () => {
  return (
    <StyledBoardOut>
      <StyledBoardBorder>
        <StyledBoardIn>
          <Card />
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
  justify-content: center;
  background: linear-gradient(to bottom, #2c2a32 50%, #322c39);
  height: 100%;
  width: 100%;
  padding: 1rem;
  position: relative;

  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 0.4rem;
`;

const StyledBoardBorder = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: linear-gradient(200deg, #f2ce30, #fcff6f 60%, #eba900);
  border-radius: 0.4rem;
`;

export default Board;
