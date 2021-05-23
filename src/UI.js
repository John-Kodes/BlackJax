import React from "react";
// Components
import BtnStand from "./components/UIButtons/BtnStand";
import BtnHit from "./components/UIButtons/BtnHit";
import CardCounter from "./components/CardCounter";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { playerDoubleDown } from "./components/gameSlice";
// Styling
import { PlayingBtn } from "./Globals/GlobalStyles";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const UI = ({ setShowBettingScreen, showBettingScreen }) => {
  const dispatch = useDispatch();

  //// STATES

  const {
    bet,
    tempBank,
    playerHand,
    results,
    dealerWillPlay,
    deckOfCards: deck,
    totalHandValue: {
      playerHand: playerHandTotal,
      dealerHand: dealerHandTotal,
    },
  } = useSelector((state) => state.game);

  const deckNum = deck.length;

  const doubleDown = () => {
    dispatch(playerDoubleDown(deck));
  };

  return (
    <Canvas>
      <CardsLeft>🃏{deckNum ? deckNum : "err"}</CardsLeft>
      <DealerTag>
        <span>{dealerHandTotal}</span>
        Dealer
      </DealerTag>
      <PlayerTag>
        <span>{playerHandTotal}</span>
        Player
      </PlayerTag>
      <Bank>Bank: ${tempBank}</Bank>
      <BtnsContainer>
        <BetNum>
          <span>BET</span>${bet}
        </BetNum>
        <BtnsBox>
          <BtnStand
            setShowBettingScreen={setShowBettingScreen}
            showBettingScreen={showBettingScreen}
          />
          <BtnHit />
          <BtnDoubleDown
            onClick={doubleDown}
            disabled={
              playerHand.length < 1 ||
              playerHand.length > 2 ||
              bet > tempBank ||
              results !== "none" ||
              dealerWillPlay
            }
          >
            🃏 DOUBLE
          </BtnDoubleDown>
        </BtnsBox>
        <CounterContainer>
          <CardCounter />
        </CounterContainer>
      </BtnsContainer>
    </Canvas>
  );
};

const BtnDoubleDown = styled(PlayingBtn)`
  font-size: 2rem;
  padding: 1rem;
`;

const Canvas = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;

  padding: 6rem 2rem;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 40%;
  height: 100%;
`;

const BetNum = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;
  font-size: 8rem;
  font-weight: 200;

  span {
    font-size: 2rem;
    font-weight: 400;
  }
`;

const BtnsBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 15rem;
  margin-top: -3rem;
`;

const CounterContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default React.memo(UI);
