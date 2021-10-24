import React from "react";
// Styling
import styled from "styled-components";

const UserRank = ({ user }) => {
  return (
    <Rank>
      <RankValue>{user.rank}</RankValue>
      <h3 style={{ color: user.color }}>{user.username}</h3>
      <p>
        <span>Highscore:&nbsp;</span>
        {user.highScore}
      </p>
      <p>
        <span>Current score:&nbsp;</span>
        {user.currentScore}
      </p>
    </Rank>
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

const Rank = styled.li`
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

export default UserRank;
