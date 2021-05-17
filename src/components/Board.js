import React from "react";

// Components
import UI from "../UI";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
import RoundResults from "./RoundResults";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const Board = ({ setShowBettingScreen, showBettingScreen }) => {
  const results = useSelector((state) => state.game.winnerResult);

  return (
    <StyledBoardOut>
      <StyledBoardBorder>
        <StyledBoardIn>
          {results !== "none" ? <RoundResults /> : ""}
          <UI
            setShowBettingScreen={setShowBettingScreen}
            showBettingScreen={showBettingScreen}
          />
          <DealerHand />
          <PlayerHand />
        </StyledBoardIn>
      </StyledBoardBorder>
    </StyledBoardOut>
  );
};

const StyledBoardOut = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom, #1f1d22, #15101b);
  border-radius: 0.4rem;
  max-height: 70rem;
  max-width: 94.4rem;
  height: 100%;
  width: 100%;
  padding: 2.8rem;
  box-shadow: 0 3rem 8rem rgba(0, 0, 0, 0.7);
`;

const StyledBoardIn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background: ${(props) => props.theme.primaryColor};
  height: 100%;
  width: 100%;
  padding: 5rem;
  overflow: hidden;

  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 0.4rem;
`;

const StyledBoardBorder = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: ${(props) => props.theme.borderGold};
  border-radius: 0.4rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.4);
`;

export default React.memo(Board);
