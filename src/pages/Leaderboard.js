import React, { useEffect, useState } from "react";
// Styling
import styled from "styled-components";
// Util
import { BasePage } from "../util/BasePage";

// user data: rank, username, color, highScore, currentScore

const LeaderboardPage = () => {
  const [ranks, setRanks] = useState([]);
  const [page, setPage] = useState(1);

  const getLeaderboard = async () => {
    try {
      const res = await fetch(
        "https://blackjax-backend.herokuapp.com/api/v1/users/leaderboardForGuest",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: { "Content-Type": "application/json" },
        }
      );

      const users = await res.json();

      setRanks(users.data.leaderboard);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <BasePage>
      <Container>
        <LeaderBoard>
          <h1>LEADERBOARD</h1>
          <RanksBox>
            {ranks.map((el, i) => (
              <UserRank key={i}>
                <RankValue>{el.rank}</RankValue>
                <h3 style={{ color: el.color }}>{el.username}</h3>
                <p>
                  <span>Highscore:&nbsp;</span>
                  {el.highScore}
                </p>
                <p>
                  <span>Current score:&nbsp;</span>
                  {el.currentScore}
                </p>
              </UserRank>
            ))}
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
  column-gap: 2.6rem;
  row-gap: 1.4rem;

  font-size: 2rem;

  width: 100%;
  max-width: 60rem;
  padding: 2rem;
  background-color: rgba(189, 137, 207, 0.08);

  border: 1px solid #7f7597;
  border-radius: 7px;

  p {
    grid-column: 2/4;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 2rem;
  }
  h3 {
    display: flex;

    font-weight: 600;
    font-size: 2.4rem;
  }
  p span {
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
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 120rem;

  background-color: rgba(18, 16, 24, 0.6);
  border-radius: 4px;
  border: 1px solid #7f7597;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: calc(100% - 10rem);
    width: 100%;
    z-index: 3;
    pointer-events: none;

    background-image: linear-gradient(
      to bottom,
      rgba(167, 119, 255, 0.06),
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 90%,
      rgba(167, 119, 255, 0.06)
    );
  }

  h1 {
    flex: 0 0 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 300;
    font-size: 6rem;

    background-color: #6558aa40;
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
