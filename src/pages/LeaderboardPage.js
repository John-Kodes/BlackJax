import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
// Components
import BasePage from "../components/BasePage";
import LeaderboardModal from "../components/LeaderboardModal";
// Context
import AuthContext from "../AuthContext";
// Config
import { API_URL } from "../config";
// style
import styled from "styled-components";

// user data: rank, username, color, highScore, currentScore

const LeaderboardPage = () => {
  const [currentUserRank, setCurrentUserRank] = useState(null);
  const [ranks, setRanks] = useState([]);
  const [page, setPage] = useState(1);
  const [resultsLength, setResultsLength] = useState(0);

  const { user } = useContext(AuthContext);

  // console.log(user);

  // TODO: button for skipping to user's current rank position
  // TODO: highglight current user's rank

  const getLeaderboard = async () => {
    setRanks(false);

    const token = Cookies.get("jwt");

    const res = await fetch(
      `${API_URL}/users/leaderboard${!user ? "ForGuest" : ""}?page=${page}`,
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

    if (user) setCurrentUserRank(dataRes.data.userRank);

    setRanks(dataRes.data.leaderboard);
    setResultsLength(dataRes.results);
  };

  const btnHandler = () => {
    console.log("btn clicked");
  };

  useEffect(() => {
    getLeaderboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <BasePage useContainer={true}>
      <TestBtn onClick={btnHandler}>jump to your rank</TestBtn>
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

const TestBtn = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
`;

export default LeaderboardPage;
