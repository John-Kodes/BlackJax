import React from "react";
import { useLocation } from "react-router";
// Components
import GoBackBtn from "../components/UIButtons/BtnGoBack";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const BasePage = ({ children }) => {
  const location = useLocation();
  return (
    <PageContainer>
      <Page
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {location.pathname !== "/" && <GoBackBtn />}
        {children}
      </Page>
    </PageContainer>
  );
};

const Page = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 100vh;
`;

const PageContainer = styled(motion.div)`
  overflow: hidden;
`;

export default BasePage;
