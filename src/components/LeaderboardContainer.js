import React, { useEffect, useState } from "react";
// Components
import UserRank from "./UserRank";
// Styling
import styled from "styled-components";

const LeaderboardContainer = ({ ranks, page }) => {
  return (
    <LeaderBoard>
      <h1>LEADERBOARD</h1>
      <RanksBox>
        {ranks && ranks.map((el, i) => <UserRank user={el} key={i} />)}
      </RanksBox>
    </LeaderBoard>
  );
};

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

export default LeaderboardContainer;
