import React from "react";
// Components
import StandBtn from "../components/StandBtn";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const UI = () => {
  return (
    <Canvas>
      <CardsLeft>🃏888</CardsLeft>
      <DealerTag>
        <span>88</span>
        Dealer
      </DealerTag>
      <PlayerTag>
        <span>88</span>
        Player
      </PlayerTag>
      <Bank>Bank: 888 888 8889</Bank>
      <BtnsContainer>
        <BtnsBox>
          <StandBtn />
          <StandBtn />
        </BtnsBox>
        <BtnsBox>
          <StandBtn />
          <StandBtn />
        </BtnsBox>
      </BtnsContainer>
      <CounterContainer>Counter</CounterContainer>
    </Canvas>
  );
};

const Canvas = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;

  padding: 12%;
`;

const CardsLeft = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  padding: 0.2rem 1rem 0.2rem 3rem;

  background-color: teal;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 2.5rem 100%);
`;

const Bank = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  padding: 0.2rem 1rem 0.2rem 3rem;

  background-color: teal;
  clip-path: polygon(2.5rem 0, 100% 0, 100% 100%, 0% 100%);
`;

const DealerTag = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  font-size: 3rem;
  padding: 0.2rem 5rem 0.2rem 1rem;
  background-color: #339;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  span {
    margin-right: 1rem;
  }
`;

const PlayerTag = styled(DealerTag)`
  bottom: 0;
  top: auto;
  clip-path: none;
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
`;

const BtnsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 10rem;
`;

const BtnsBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CounterContainer = styled(motion.div)`
  position: absolute;
  bottom: 16%;
  right: 12%;

  background-color: darkblue;
  font-size: 4rem;
  padding: 0.5rem 2rem;
`;

export default UI;
