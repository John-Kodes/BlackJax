import React from "react";
// Components
import BasePage from "../components/BasePage";
import ResetPasswordModal from "../components/ResetPasswordModal";

const ResetPasswordPage = () => {
  return (
    <BasePage useContainer={true}>
      <ResetPasswordModal />
    </BasePage>
  );
};

export default ResetPasswordPage;
