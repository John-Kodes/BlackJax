import React, { useEffect, useState } from "react";
// Components
import chipsArr from "../data/chipsData";
import PokerChipColor from "../img/PokerChip.js";
import { calcBet } from "./gameSlice";
// Styling
import styled from "styled-components";
import BtnDeal from "./UIButtons/BtnDeal";
// Animation
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";

const BettingScreen = () => {
  const tempBank = useSelector((state) => state.game.tempBank);

  const [btnIsClicked, setBtnClicked] = useState(false);
  const [betArr, setBetArr] = useState([]);
  const [betTotal, setBetTotal] = useState(0);

  const dispatch = useDispatch();

  // click a chip to push it to an array. all the values in that array will be dispatched
  const betAmount = (amount) => {
    setBetArr([...betArr, amount]);
  };

  const chipsArrFiltered = chipsArr.filter((chip) => chip.value < tempBank);
  const chipsArrStyled = chipsArrFiltered.map((chip) => {
    return (
      <StyledChipContainer
        key={chip.value}
        onClick={() => betAmount(chip.value)}
      >
        {PokerChipColor(chip.color)}
        <StyledChip style={{ color: "white" }}>{chip.value}</StyledChip>
      </StyledChipContainer>
    );
  });

  const toggle = () => {
    setBtnClicked(true);
  };

  useEffect(() => {
    if (betArr.length < 1) return;
    const total = betArr.reduce((acc, cur) => acc + cur);
    setBetTotal(total);
    dispatch(calcBet(betArr));
  }, [dispatch, betArr]);

  //// HOW THIS FUCKING SHIT WILL WORK
  // We have an array of chips selected [10, 10, 500]
  // The total will be calculated with array.reduce()
  // There may need to be 2 states for banks. 1 tempBank then the real bank.
  // The tempBank state will calculated -- tempBank = bank - chipsTotal

  return (
    <StyledBackDrop>
      <StyledBettingScreen>
        <StyledBank>Bank: ${tempBank}</StyledBank>
        <StyledChipBox>{chipsArrStyled}</StyledChipBox>
        <StyledBetBox>
          <h1>${betTotal}</h1>
          <BtnDeal
            click={toggle}
            setBtnClicked={setBtnClicked}
            btnIsClicked={btnIsClicked}
          ></BtnDeal>
        </StyledBetBox>
      </StyledBettingScreen>
    </StyledBackDrop>
  );
};

export default React.memo(BettingScreen);

const StyledChipContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11rem;
  width: 11rem;
  position: relative;

  svg {
    filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.699));
  }

  transition: all 0.2s;

  &:hover {
    transform: translateY(-8px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const StyledChip = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  height: 10rem;
  width: 10rem;
  font-size: 3rem;
  font-weight: 600;

  filter: drop-shadow(0 0 0.4rem rgb(0, 0, 0));
`;

const StyledChipBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex: 1;
  height: 100%;
  margin-right: 2rem;
  border-radius: 4px;
  background-color: rgba(145, 145, 145, 0.192);

  flex-wrap: wrap;
  gap: 1.5rem;
`;

const StyledBetBox = styled(motion.div)`
  flex: 0 0 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30rem;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);

  font-size: 2rem;
  background-color: rgba(119, 103, 85, 0.349);
  border-radius: 4px;
  h1 {
    margin-bottom: 2rem;
  }
`;

const StyledBank = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 3rem;
  font-weight: 600;
  padding: 0.2rem 1rem 0.2rem 3rem;
  color: #775100;

  background-color: #f2ce30;
  clip-path: polygon(2.5rem 0, 110% 0, 110% 110%, 0% 100%);
`;

const StyledBettingScreen = styled(motion.div)`
  display: flex;
  align-items: center;

  background-color: rgba(139, 128, 105, 0.178);
  height: 60rem;
  width: 100rem;
  border-radius: 4px;
  border: 1px solid #f2ce30;
  padding: 2rem;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
`;

const StyledBackDrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(3px) opacity(80%);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
