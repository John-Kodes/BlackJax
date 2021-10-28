import React from "react";
// Components
import LoginModal from "./../components/LoginModal";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Util
import BasePage from "../util/BasePage";

const LoginPage = () => {
  return (
    <BasePage useContainer={true}>
      <LoginModal />
    </BasePage>
  );
};

export default LoginPage;
