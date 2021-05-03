import React from "react";
// Components
import Board from "../components/Board";
import BGSVG from "../img/BGSVG.svg";
// Styling
import styled from "styled-components";
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
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 3rem;
  z-index: -9999999999999999999999;

  background-image: url(${BGSVG}),
    linear-gradient(185deg, rgba(0, 0, 0, 0.9), rgba(3, 0, 8, 0.9));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
`;

export default Home;
