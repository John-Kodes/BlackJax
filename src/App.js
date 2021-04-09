import React from "react";
// Components
import Board from "./components/Board";
// Styling
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Board />
    </StyledApp>
  );
}

const StyledApp = styled(motion.div)`
  background-image: linear-gradient(to bottom, #000, #000013);
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 3rem;
  z-index: -9999999999999999999999;
`;

export default App;
