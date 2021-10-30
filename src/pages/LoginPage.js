import React from "react";
// Components
import LoginModal from "../components/LoginModal";
import BasePage from "../components/BasePage";

const LoginPage = () => {
  return (
    <BasePage useContainer={true}>
      <LoginModal />
    </BasePage>
  );
};

export default LoginPage;
