import React, { useEffect, useState } from "react";
// Components
import chipsArr from "../data/chipsData";
import PokerChipColor from "../img/PokerChip.js";
// Styling
import styled from "styled-components";
import BtnDeal from "./UIButtons/BtnDeal";
// Animation
import { motion } from "framer-motion";
// Redux
import { calcBet, updateBank, startOver } from "./gameSlice";
import { useDispatch, useSelector } from "react-redux";

const BettingScreen = ({ showBettingScreen, setShowBettingScreen }) => {
  const [betArr, setBetArr] = useState([]);
  const [betTotal, setBetTotal] = useState(0);

  const { tempBank, bank } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  // NOTE: disable AllInBtn when deal is set

  // click a chip to push it to an array. all the values in that array will be dispatched
  const betAmount = (amount) => {
    setBetArr([...betArr, amount]);
  };

  const chipsArrFiltered = chipsArr.filter((chip) => chip.value <= tempBank);
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

  const btnDealHandler = () => {
    setShowBettingScreen(false);
    dispatch(updateBank());
  };

  const betAll = () => {
    if (betTotal === bank) {
      setBetTotal(0);
      setBetArr([0]);
      dispatch(calcBet([0]));
    } else {
      setBetTotal(bank);
      dispatch(calcBet([bank]));
    }
  };

  const startOverHandler = () => {
    dispatch(startOver());
  };

  useEffect(() => {
    if (betArr.length < 1) return;
    const total = betArr.reduce((acc, cur) => acc + cur);
    setBetTotal(total);
    dispatch(calcBet(betArr));
  }, [dispatch, betArr]);

  const bettingScreenAnim = {
    initial: {
      y: -800,
      opacity: 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: [0.26, 0.44, 0.52, 1.17],
      },
    },
    exit: {
      y: -800,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const backDropAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.7, delay: 0 } },
  };

  return (
    <>
      <StyledBackDrop
        variants={backDropAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      {tempBank < 1 && betArr.length < 1 && betTotal < 1 ? (
        <RestartScreen
          variants={bettingScreenAnim}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <p>
            Well this is awkward. . . You ran out of money 🤡 <br />
            <br />
            To play again, "borrow"
            <br />
            some money from the bank 😊
          </p>
          <StartOverBtn onClick={startOverHandler}>GOOD IDEA!</StartOverBtn>
        </RestartScreen>
      ) : (
        <StyledBettingScreen
          variants={bettingScreenAnim}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <StyledBank>Bank: ${tempBank}</StyledBank>
          <StyledChipBox>{chipsArrStyled}</StyledChipBox>
          <StyledBetBox>
            <h1>${betTotal}</h1>
            <BtnDeal
              click={btnDealHandler}
              betTotal={betTotal}
              disabled={!showBettingScreen}
            ></BtnDeal>
            <BetAllBtn onClick={betAll} disabled={!showBettingScreen}>
              {betTotal === bank ? "all out..." : "ALL IN!"}
              <div className="btnBG1" />
              <div className="btnBG2" />
            </BetAllBtn>
          </StyledBetBox>
        </StyledBettingScreen>
      )}
    </>
  );
};

export default React.memo(BettingScreen);

const RestartScreen = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;
  z-index: 150;
  overflow: hidden;

  background-color: rgba(24, 20, 16, 0.6);
  height: 60rem;
  width: 100rem;
  border-radius: 4px;
  border: 1px solid #979075;

  p {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`;

const StartOverBtn = styled(motion.button)`
  font-weight: 600;
  background-color: transparent;

  transition: all 0.2s;
  &:hover {
    transform: translateY(-7px);
    background-color: rgb(0, 180, 105);
  }
  &:active {
    transform: translateY(2px);
    background-color: rgb(0, 180, 105);
  }
`;

const BetAllBtn = styled(motion.button)`
  position: relative;
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 10rem;
  background-color: transparent;

  border: 3px solid ${(props) => props.theme.gold};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  overflow: hidden;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);
    color: black;
    filter: brightness(115%);

    .btnBG1 {
      transform: skew(0.6rad) translateX(0);
    }

    .btnBG2 {
      transform: skew(0.6rad) translateX(0);
    }
  }

  &:active {
    filter: brightness(80%) hue-rotate(-10deg);
    transform: translateY(2px);
  }

  .btnBG1 {
    position: absolute;
    width: 120%;
    height: 100%;
    top: 0;
    left: -1rem;
    background: rgba(255, 174, 0, 0.664);
    z-index: -1;

    transform: skew(0.6rad) translateX(-17rem);

    transition: all 0.6s;
  }

  .btnBG2 {
    position: absolute;
    width: 120%;
    height: 100%;
    top: 0;
    left: -1rem;
    background: ${(props) => props.theme.gold};
    z-index: -1;

    transform: skew(0.6rad) translateX(-30rem);

    transition: all 0.6s;
  }
`;

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

  background-color: rgba(139, 128, 105, 0.2);
  height: 60rem;
  width: 100rem;
  border-radius: 4px;
  border: 1px solid #f2ce30;
  padding: 2rem;

  position: absolute;
  z-index: 150;
  overflow: hidden;
`;

const StyledBackDrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(3px);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
