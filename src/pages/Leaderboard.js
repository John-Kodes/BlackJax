import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { pageAnimation, btnAnimation } from "../animations";
// Routing
import { Link } from "react-router-dom";
// Util
import { BasePage } from "../util/BasePage";

// user data: rank, username, color, currentScore, highScore

const LeaderboardPage = () => {
  return (
    <BasePage>
      <Container>
        <LeaderBoard>
          <h1>LEADERBOARD</h1>
          <RanksBox>
            <Rank>s</Rank>
          </RanksBox>
        </LeaderBoard>
      </Container>
    </BasePage>
  );
};

const Rank = styled.ul`
  display: flex;
  align-items: center;

  font-size: 2rem;

  width: 100%;
  max-width: 90rem;
  padding: 2rem;
  background-color: #afafaf2f;
`;

const RanksBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;

  overflow-y: scroll;
`;

const LeaderBoard = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 120rem;

  background-color: rgba(18, 16, 24, 0.6);
  border-radius: 4px;
  border: 1px solid #7f7597;

  h1 {
    flex: 0 0 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 300;
    font-size: 6rem;

    background-color: #78699c25;
    border-bottom: 1px solid #7f7597;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
`;

export default LeaderboardPage;
