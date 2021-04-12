import React from "react";
// Components
import BtnStand from "./BtnStand";
import BtnHit from "./BtnHit";
import BtnSplit from "./BtnSplit";
import BtnInsurance from "./BtnInsurance";
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
      <Bank>Bank: $888 888 888</Bank>
      <BtnsContainer>
        <BtnsBox>
          <BtnSplit />
          <BtnInsurance />
        </BtnsBox>
        <BtnsBox>
          <BtnStand />
          <BtnHit />
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
  color: #d3d3d3;

  background-color: ${(props) => props.theme.primaryColorDark};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 2.5rem 100%);
`;

const Bank = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  padding: 0.2rem 1rem 0.2rem 3rem;
  color: #d3d3d3;

  background-color: ${(props) => props.theme.primaryColorDark};
  clip-path: polygon(2.5rem 0, 100% 0, 100% 100%, 0% 100%);
`;

const DealerTag = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 3rem;
  color: #d3d3d3;

  padding: 0.5rem 5rem 0.5rem 1.5rem;
  background: ${(props) => props.theme.primaryColorDark};
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
  bottom: 20%;
  right: 9%;

  background-color: darkblue;
  font-size: 4rem;
  padding: 2rem 2rem;
`;

export default UI;
