import React, { useState } from "react";
// Components
import Board from "../components/Board";
import BGSVG from "../img/BGSVG.svg";
import BettingScreen from "../components/BettingScreen";
// Styling
import styled from "styled-components";
// Animation
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function Home() {
  const [showBettingScreen, setShowBettingScreen] = useState(false);

  return (
    <StyledHome>
      <AnimatePresence>
        {showBettingScreen ? (
          <BettingScreen
            key="modal"
            setShowBettingScreen={setShowBettingScreen}
          />
        ) : (
          ""
        )}
      </AnimatePresence>
      <Board
        setShowBettingScreen={setShowBettingScreen}
        showBettingScreen={showBettingScreen}
      />
      {/* <TestButton onClick={() => setShowBettingScreen(!showBettingScreen)}>
        butt
      </TestButton> */}
    </StyledHome>
  );
}

// // Temp;
// const TestButton = styled(motion.button)`
//   position: absolute;
//   right: 5px;
//   background-color: #34353f;

//   z-index: 99999999999999999999999999999999999999999999999;

//   transition: all 0.2s;
//   &:hover {
//     transform: translateY(-5px);
//     filter: brightness(150%);
//   }

//   &:active {
//     transform: translateY(2px);
//     filter: brightness(100%);
//   }
// `;

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
