import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
// Components
import BasePage from "../components/BasePage";
import Modal from "../components/Modal";
import ErrorModal from "../components/ErrorModal";
// Context
// import AuthContext from "../AuthContext";
// Styling
import styled from "styled-components";
// // Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
// // Util
// import { colorChecker } from "../util";
// // Config
// import { API_URL } from "../config";
// // Routing
// import { Redirect } from "react-router-dom";

// TODO: Add update password functionality

const ChangePasswordPage = () => {
  //   const { user, setUser, setError } = useContext(AuthContext);

  //   const [isLoading, setIsLoading] = useState(false);

  return (
    <BasePage useContainer={true}>
      <ErrorModal />
      <Modal style={{ gap: "2rem" }}>bruh</Modal>
    </BasePage>
  );
};

const IconContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;

  font-size: 4rem;
  color: #dbccff68;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputBoxColor = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;

  .color-input {
    width: 10rem;
    padding: 0 !important;
    border: none !important;
  }

  p {
    font-size: 1.2rem;
    span {
      color: #ff004c;
    }
  }
`;

const FormField = styled.input`
  display: inline-flex;
  align-items: center;
  gap: 2rem;

  font-size: 2.8rem;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  border: none;

  transition: border 0.5s;
  outline: none;
  svg {
    font-size: 4rem;
  }

  &::placeholder {
    color: #a59eb8;
  }
`;

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

  &:disabled {
    background-color: rgba(67, 66, 70, 0.4);
    border-color: #aaaaaa;
    color: #aaa;
    cursor: default;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ChangePasswordPage;
