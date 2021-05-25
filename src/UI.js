import React from "react";
// Components
import BtnStand from "./components/UIButtons/BtnStand";
import BtnHit from "./components/UIButtons/BtnHit";
import GoBackBtn from "./components/UIButtons/BtnGoBack";
import BtnHelp from "./components/UIButtons/BtnHelp";
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
      <CardsLeft>
        <h4>🃏{deckNum ? deckNum : "err"}</h4>
      </CardsLeft>
      <ContainerHelp>
        <BtnHelp />
      </ContainerHelp>
      <DealerTag>
        <GoBackBtn />
        <h3>
          <span>{dealerHandTotal}</span>
          Dealer
        </h3>
      </DealerTag>
      <PlayerTag>
        <h3>
          <span>{playerHandTotal}</span>
          Player
        </h3>
      </PlayerTag>
      <Bank>
        <h4>Bank: ${tempBank}</h4>
      </Bank>

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
        {/* <CounterContainer>
          <CardCounter />
        </CounterContainer> */}
      </BtnsContainer>
    </Canvas>
  );
};

const ContainerHelp = styled(motion.div)`
  & .help--btn {
    display: none;
    top: 3.5rem;
    right: 0.5rem;

    @media only screen and (max-width: 67em) {
      display: inline;
    }
  }
`;

const BtnDoubleDown = styled(PlayingBtn)`
  font-size: 2rem;
  padding: 1rem;
  @media only screen and (max-width: 39em) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 28em) {
    font-size: 2rem;
  }
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

  @media only screen and (max-width: 67em) {
    padding-left: 11rem;
  }

  @media only screen and (max-width: 60em) {
    padding: 1.2rem 5rem 1.2rem 11.5rem;
  }

  span {
    margin-right: 1rem;
  }

  & .go_back--btn {
    display: none;
    top: 0.6rem;
    left: 0.6rem;

    @media only screen and (max-width: 67em) {
      display: inline;
    }
  }
`;

const PlayerTag = styled(DealerTag)`
  padding-left: 1.5rem;
  padding-right: 5rem;
  bottom: 0;
  top: auto;
  clip-path: none;
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);

  @media only screen and (max-width: 67em) {
    padding-right: 3.5rem;
  }
`;

const BtnsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 0 40%;

  height: 100%;

  @media only screen and (max-width: 40em) {
    flex-direction: row;
    justify-content: space-around;
    align-self: flex-end;
    flex: 0 0 100%;

    height: 40%;
  }
`;

const BetNum = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 6rem;
  font-weight: 200;

  span {
    font-size: 2rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 39em) {
    font-size: 4rem;
  }
`;

const BtnsBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 15rem;

  @media only screen and (max-width: 39em) {
    height: 12rem;
  }
  @media only screen and (max-width: 28em) {
    height: 14rem;
  }
`;

export default React.memo(UI);
