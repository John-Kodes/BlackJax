import React, { useContext } from "react";
// Components
import BasePage from "../components/BasePage";
import ResetPasswordModal from "../components/ResetPasswordModal";
// Context
import AuthContext from "../AuthContext";
// styles
import styled from "styled-components";

const ResetPasswordPage = () => {
  const { error } = useContext(AuthContext);

  return (
    <BasePage useContainer={true}>
      {error && (
        <ErrorContainer>
          <p>{error}</p>
        </ErrorContainer>
      )}
      <ResetPasswordModal />
    </BasePage>
  );
};

const ErrorContainer = styled.div`
  padding: 3rem 4rem;
  width: 100%;
  max-width: 46rem;

  background-color: rgba(54, 7, 7, 0.39);
  border: 1px solid #ff0040;
  border-radius: 4px;

  p {
    font-size: 1.6rem;
  }
`;

export default ResetPasswordPage;
