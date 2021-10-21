import React from "react";
// Styling
import styled from "styled-components";
// // Animation
// import { motion } from "framer-motion";
// import { pageAnimation, btnAnimation } from "../animations";
// // Routing
// import { Link } from "react-router-dom";
// Util
import { BasePage } from "../util/BasePage";

// user data: rank, username, color, highScore, currentScore

const LeaderboardPage = () => {
  return (
    <BasePage>
      <Container>
        <LeaderBoard>
          <h1>LEADERBOARD</h1>
          <RanksBox>
            {(function () {
              const arr = [];
              for (let i = 0; i < 10; i++) {
                arr.push(
                  <UserRank>
                    <RankValue>00000</RankValue>
                    <p>username000000000000</p>
                    <p>
                      <span>Highscore:&nbsp;</span>
                      000 000 000 000 000
                    </p>
                    <p>
                      <span>Current score:&nbsp;</span>
                      000 000 000 000 000
                    </p>
                  </UserRank>
                );
              }
              return arr;
            })()}
          </RanksBox>
        </LeaderBoard>
      </Container>
    </BasePage>
  );
};

const RankValue = styled.div`
  position: relative;
  grid-row: 1/-1;
  grid-column: 1/2;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  font-weight: 600;
  font-size: 3.2rem;

  &::before {
    content: "";
    position: absolute;
    height: 11rem;
    width: 11rem;
    z-index: -1;
    border-radius: 100%;

    background-color: rgba(114, 113, 148, 0.3);
  }
`;

const UserRank = styled.li`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 11rem repeat(2, 1fr);
  gap: 1.8rem;

  font-size: 2rem;

  width: 100%;
  max-width: 60rem;
  padding: 2rem;
  background-color: rgba(142, 105, 156, 0.141);

  border: 1px solid #7f7597;
  border-radius: 7px;

  p {
    grid-column: 2/4;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  span {
    font-size: 1.6rem;
    color: rgba(225, 214, 255, 0.6);
  }
`;

const RanksBox = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  height: 100%;

  padding: 2rem 0 7rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;

    &-thumb {
      background-color: rgba(127, 117, 151, 0.2);
      outline: 1px solid #7f7597;
    }

    &-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &-corner {
      visibility: hidden;
    }
  }
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

    background-color: #2f227c22;
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
