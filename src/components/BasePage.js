import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
// Components
import GoBackBtn from "../components/UIButtons/BtnGoBack";
// Context
import AuthContext from "../AuthContext";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const BasePage = ({ children, useContainer }) => {
  const location = useLocation();

  const { setError } = useContext(AuthContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setError(null), []);

  return (
    <PageContainer>
      <Page
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {useContainer ? (
          <Container>
            {location.pathname !== "/" && <GoBackBtn />}
            {children}
          </Container>
        ) : (
          <>
            {location.pathname !== "/" && <GoBackBtn />}
            {children}
          </>
        )}
      </Page>
    </PageContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  min-height: 100vh;
  width: 100%;
  padding: 2rem;
`;

const Page = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

const PageContainer = styled(motion.div)`
  overflow-x: hidden;
`;

export default BasePage;
