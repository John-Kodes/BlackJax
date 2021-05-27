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
import {
  calcBet,
  updateBank,
  startOver,
  loadInBettingScreen,
} from "./gameSlice";
import { useDispatch, useSelector } from "react-redux";

const BettingScreen = ({ showBettingScreen, setShowBettingScreen }) => {
  const [betArr, setBetArr] = useState([]);
  const [betTotal, setBetTotal] = useState(0);

  const { tempBank, bank, dealerHand } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  // click a chip to push it to an array. all the values in that array will be dispatched
  const betAmount = (amount) => {
    setBetArr([...betArr, amount]);
  };

  const chipAnim = {
    hover: {
      y: -8,
      transition: {
        duration: 0.1,
      },
    },
    tap: {
      y: 2,
      transition: {
        duration: 0.1,
      },
    },
  };

  const chipsArrFiltered = chipsArr.filter((chip) => chip.value <= tempBank);
  const chipsArrStyled = chipsArrFiltered.map((chip) => {
    return (
      <StyledChipContainer
        variants={chipAnim}
        whileHover="hover"
        whileTap="tap"
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
    // Autosave point
    if (betArr.length < 1 && dealerHand.length < 1 && bank > 0) {
      localStorage.setItem("localBank", bank);

      dispatch(loadInBettingScreen());
    }
  }, [dispatch, bank]);

  useEffect(() => {
    // auto updates the UI bank
    if (betArr.length > 0 && dealerHand.length < 1) {
      const total = betArr.reduce((acc, cur) => acc + cur);
      setBetTotal(total);
      dispatch(calcBet(betArr));
    }

    // return () => console.log("bettingScreen clean up");
  }, [dispatch, betArr, betArr.length, dealerHand.length]);

  const bettingScreenAnim = {
    initial: {
      y: -1000,
      opacity: 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.4,
        duration: 0.5,
        ease: [0.22, 0.01, 0.54, 1],
      },
    },
    exit: {
      y: -1000,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  const backDropAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.7, delay: 0 } },
  };

  const showBettingCard = () => {
    if (!dealerHand.length > 0) {
      return (
        <>
          <StyledBackDrop
            variants={backDropAnim}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          {bank < 1 && betArr.length < 1 && betTotal < 1 ? (
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
                <BtnBox>
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
                </BtnBox>
              </StyledBetBox>
            </StyledBettingScreen>
          )}
        </>
      );
    }
  };

  return <Container>{showBettingCard()}</Container>;
};

export default React.memo(BettingScreen);

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 1rem;
`;

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
  max-height: 60rem;
  height: 100%;
  max-width: 100rem;
  width: 100%;
  border: 1px solid #979075;
  border-radius: 4px;
  padding: 2rem;

  @media only screen and (max-width: 64.12em) {
    max-height: 100%;
    max-width: 100%;
    border-radius: 0px;
  }

  p {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`;

const StartOverBtn = styled(motion.button)`
  font-weight: 600;
  background-color: transparent;
  border: 3px solid #ffffff83;

  transition: all 0.2s;
  &:hover {
    transform: translateY(-7px);
    background-color: rgb(0, 180, 105);
    border: 3px solid transparent;
  }
  &:active {
    transform: translateY(2px);
    background-color: rgb(0, 180, 105);
    border: 3px solid transparent;
  }
`;

const BetAllBtn = styled(motion.button)`
  position: relative;
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 10rem;
  background-color: transparent;

  border: 4px solid ${(props) => props.theme.gold};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  overflow: hidden;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);
    color: black;
    filter: brightness(115%);

    .btnBG1 {
      transform: skew(0.6rad) translateX(4rem) scale(2);
    }

    .btnBG2 {
      transform: skew(0.6rad) translateX(4rem) scale(2);
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
    left: -5rem;
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
    left: -5rem;
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
  height: 9rem;
  width: 9rem;
  font-size: 3rem;
  position: relative;

  @media only screen and (max-width: 64.12em) {
    height: 14rem;
    width: 14rem;
    font-size: 4rem;
  }

  @media only screen and (max-width: 50em) {
    height: 12rem;
    width: 12rem;
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 44.25em) {
    height: 10rem;
    width: 10rem;
    font-size: 3rem;
  }

  @media only screen and (max-width: 33.9em) {
    height: 10rem;
    width: 10rem;
    font-size: 3rem;
  }
  @media only screen and (max-width: 21em) {
    height: 9rem;
    width: 9rem;
    font-size: 3rem;
  }

  svg {
    filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.669));
  }
`;

const StyledChip = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  height: 10rem;
  width: 10rem;
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
  padding: 1rem;

  /* overflow: scroll; */

  flex-wrap: wrap;
  gap: 1.5rem;
`;

const StyledBetBox = styled(motion.div)`
  flex: 0 0 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30rem;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);

  font-size: 1.6rem;
  background-color: rgba(119, 103, 85, 0.349);
  border-radius: 4px;
  h1 {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 40em) {
    flex-direction: row;
    justify-content: space-evenly;

    width: 100%;
    margin-top: 2rem;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);

    h1 {
      margin-bottom: 0rem;
    }
  }
`;

const BtnBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const StyledBank = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 3rem;
  font-weight: 600;
  padding: 0.2rem 1rem 0.2rem 3rem;
  color: #775100;

  z-index: 10;

  background-color: #f2ce30;
  clip-path: polygon(2.5rem 0, 110% 0, 110% 110%, 0% 100%);
`;

const StyledBettingScreen = styled(motion.div)`
  display: flex;
  align-items: center;

  background-color: rgba(139, 128, 105, 0.2);
  max-height: 60rem;
  height: 100%;
  max-width: 100rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #f2ce30;
  padding: 2rem;

  position: absolute;
  z-index: 150;

  @media only screen and (max-width: 64.12em) {
    max-height: 100%;
    height: 100%;
    max-width: 100%;
    width: 100%;
    border-radius: 0px;
    border: 1px solid #f2ce30;
  }

  @media only screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const StyledBackDrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  backdrop-filter: blur(3px);

  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
`;
