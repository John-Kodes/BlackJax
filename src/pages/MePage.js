import React, { useContext, useState } from "react";
// Components
import BasePage from "../components/BasePage";
import Modal from "../components/Modal";
// Context
import AuthContext from "../AuthContext";
// Styling
import styled from "styled-components";
// Routing
import { Redirect } from "react-router-dom";

// TODO: This page should contain information about the user and ways for the user to update their color, name or update password
/* 
  username
  color
  highscore / current score
  edit btn
  change password Link(?)
*/

const MePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useContext(AuthContext);

  const formatNumber = (n) => String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,");

  // Btn Handlers
  const cancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <BasePage useContainer={true}>
      {!user && <Redirect to="/" />}
      <Modal style={{ gap: "2rem" }}>
        <h1 style={{ color: user.color }}>{user.username}</h1>
        <p>
          Your current score is <span>{formatNumber(user.currentScore)}</span>.
          <br />
          And your highscore is <span>{formatNumber(user.highScore)}!</span>.
        </p>
        <BtnContainer>
          {isEditing ? (
            <>
              <Btn>Save changes</Btn>
              <Btn onClick={cancelHandler}>Cancel</Btn>
            </>
          ) : (
            <>
              <Btn onClick={() => setIsEditing(true)}>Edit profile</Btn>
              <Btn>Change password</Btn>
            </>
          )}
        </BtnContainer>
      </Modal>
    </BasePage>
  );
};

const Btn = styled.button`
  font-size: 1.8rem;
  font-weight: 400;

  background-color: rgba(18, 16, 24, 0.6);
  border: 1px solid #7f7597;
  border-radius: 4px;

  transition: all 0.2s;

  &:hover {
    background-color: rgba(44, 39, 59, 0.6);
  }

  &:active {
    color: #aaa;
    background-color: rgba(18, 16, 24, 0.6);
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MePage;
