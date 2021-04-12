import React from "react";
// Components
import Board from "../components/Board";
// Styling
import styled, { ThemeProvider } from "styled-components";
// Animation
import { motion } from "framer-motion";

function Home() {
  return (
    <StyledHome>
      <Board />
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)`
  background-image: linear-gradient(to bottom, #000, #000013);
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 3rem;
  z-index: -9999999999999999999999;
`;

export default Home;
