import React, { useEffect, useState } from "react";
// Components
import BasePage from "../components/BasePage";
import LeaderboardModal from "../components/LeaderboardModal";
// Config
import { API_URL } from "../config";

// user data: rank, username, color, highScore, currentScore

const LeaderboardPage = () => {
  const [ranks, setRanks] = useState([]);
  const [page, setPage] = useState(1);
  const [resultsLength, setResultsLength] = useState(0);

  const getLeaderboard = async () => {
    try {
      setRanks(false);
      console.log("loading results...");

      const res = await fetch(
        `${API_URL}/users/leaderboardForGuest?page=${page}`
      );

      const users = await res.json();

      setRanks(users.data.leaderboard);
      setResultsLength(users.results);
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
      <LeaderboardModal
        ranks={ranks}
        setPage={setPage}
        page={page}
        resultsLength={resultsLength}
      />
    </BasePage>
  );
};

export default LeaderboardPage;
