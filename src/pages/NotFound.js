import React from "react";
// Styling
import styled from "styled-components";
import { PageContainer } from "../Globals/GlobalStyles";
// Animation
import { motion } from "framer-motion";
import { btnAnimation } from "../animations";
// Routing
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <PageContainer>
      <Container>
        <h1>404</h1>
        <p>This page does not exist</p>
        <Link to="/">
          <HomeBtn
            variants={btnAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="active"
          >
            Return home
          </HomeBtn>
        </Link>
      </Container>
    </PageContainer>
  );
};

const HomeBtn = styled(motion.button)`
  font-weight: 400;
  padding: 1rem 4.2rem;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  height: 100vh;
  width: 100vw;

  h1 {
    font-size: 10rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

export default NotFound;
