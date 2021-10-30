import React from "react";
// Components
import LoginModal from "../components/LoginModal";
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
