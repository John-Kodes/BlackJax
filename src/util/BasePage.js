import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

export const BasePage = ({ children }) => {
  return (
    <PageContainer>
      <Page
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
