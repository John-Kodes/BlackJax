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
  const [page, setPage] = useState(1);
  const [resultsLength, setResultsLength] = useState(0);

  const getLeaderboard = async () => {
    try {
      console.log("loading page...");

      const res = await fetch(
        `https://blackjax-backend.herokuapp.com/api/v1/users/leaderboardForGuest?page=${page}`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: { "Content-Type": "application/json" },
        }
      );

      const users = await res.json();

      setRanks(users.data.leaderboard);
      setResultsLength(users.results);
      console.log(users);
      console.log(page);

      return;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLeaderboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <BasePage>
      <Container>
        <LeaderboardContainer
          ranks={ranks}
          setPage={setPage}
          page={page}
          resultsLength={resultsLength}
        />
        <TestBtn onClick={() => setPage(page + 1)}>TEST</TestBtn>
      </Container>
    </BasePage>
  );
};
const TestBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
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
