import React, { useState, useEffect } from "react";
// Components
import Board from "../components/Board";
import BGSVG from "../img/BGSVG.svg";
import BettingScreen from "../components/BettingScreen";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { cardsShuffled } from "../components/gameSlice";
// Styling
import styled from "styled-components";
// Animation
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function Home() {
  const [showBettingScreen, setShowBettingScreen] = useState(true);

  const cardsShuffledBool = useSelector((state) => state.game.cardsShuffled);

  const dispatch = useDispatch();

  const messageAnim = {
    initial: {
      y: -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (cardsShuffledBool) {
      setTimeout(() => {
        dispatch(cardsShuffled());
      }, 3000);
    }
  });

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
        <Board
          setShowBettingScreen={setShowBettingScreen}
          showBettingScreen={showBettingScreen}
        />
        {/* <TestButton onClick={() => setShowBettingScreen(!showBettingScreen)}>
        butt
      </TestButton> */}
        {cardsShuffledBool ? (
          <Message
            variants={messageAnim}
            initial="initial"
            animate="animate"
            exit="initial"
            key="message"
          >
            🃏 The cards has been shuffled!
          </Message>
        ) : (
          ""
        )}
      </AnimatePresence>
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

const Message = styled(motion.div)`
  position: absolute;
  top: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: #8b4f00;

  padding: 0.5rem 1.5rem;
  background-image: ${(props) => props.theme.borderGold};
  border: 3px solid #b38300;
  border-radius: 0.4rem;
  z-index: 100;
`;

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
