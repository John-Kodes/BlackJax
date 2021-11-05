import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
// Components
import BasePage from "../components/BasePage";
import LeaderboardModal from "../components/LeaderboardModal";
// Context
import AuthContext from "../AuthContext";
// Config
import { API_URL } from "../config";

// user data: rank, username, color, highScore, currentScore

const LeaderboardPage = () => {
  const [currentUserRank, setCurrentUserRank] = useState(null);
  const [ranks, setRanks] = useState([]);
  const [page, setPage] = useState(1);
  const [resultsLength, setResultsLength] = useState(0);

  const { user } = useContext(AuthContext);

  // console.log(user);

  // TODO: button for skipping to user's current rank position

  const getLeaderboard = async () => {
    setRanks(false);

    const token = Cookies.get("jwt");

    const res = await fetch(
      `${API_URL}/users/leaderboard${
        !user ? "ForGuest" : ""
      }?page=${page}&limit=5`,
      user
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {}
    );

    const dataRes = await res.json();
    console.log(dataRes);

    if (user) setCurrentUserRank(dataRes.data.user.userRank);

    setRanks(dataRes.data.leaderboard);
    setResultsLength(dataRes.results);
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
        currentUserRank={currentUserRank}
      />
    </BasePage>
  );
};

export default LeaderboardPage;
