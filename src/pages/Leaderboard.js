import React, { useEffect, useState } from "react";
// Components
import LeaderboardContainer from "./../components/LeaderboardContainer";
// Styling
import styled from "styled-components";
// Util
import { BasePage } from "../util/BasePage";

// user data: rank, username, color, highScore, currentScore

const LeaderboardPage = () => {
  const [ranks, setRanks] = useState([]);
  // const [page, setPage] = useState(1);

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
        <LeaderboardContainer ranks={ranks} />
      </Container>
    </BasePage>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
`;

export default LeaderboardPage;
