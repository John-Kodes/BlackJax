import React, { useEffect, useState } from "react";
// Components
import LeaderboardContainer from "./../components/LeaderboardContainer";
// Styling
import styled from "styled-components";
// Util
import BasePage from "../util/BasePage";

// user data: rank, username, color, highScore, currentScore

const LeaderboardPage = () => {
  const [ranks, setRanks] = useState([]);
  const [page, setPage] = useState(1);
  const [resultsLength, setResultsLength] = useState(0);

  const getLeaderboard = async () => {
    try {
      setRanks(false);
      console.log("loading page...");

      const res = await fetch(
        `https://blackjax-backend.herokuapp.com/api/v1/users/leaderboardForGuest?page=${page}`
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
    <BasePage useContainer={true}>
      <LeaderboardContainer
        ranks={ranks}
        setPage={setPage}
        page={page}
        resultsLength={resultsLength}
      />
    </BasePage>
  );
};

export default LeaderboardPage;
