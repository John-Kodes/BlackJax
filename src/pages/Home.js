import React from "react";
// Styling
import styled from "styled-components";
import { PageContainer } from "../Globals/GlobalStyles";
// Animation
import { motion } from "framer-motion";
import { pageAnimation, btnAnimation } from "../animations";

// Routing
import { Link } from "react-router-dom";

const Home = () => {
  const titleAnim = {
    initial: {
      x: -30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const titleTextHover = {
    y: -10,
    transition: {
      duration: 0.15,
    },
  };

  const createTitle = (title) => {
    console.log(title.split(""));

    return title
      .split("")
      .map((el) => <motion.div whileHover={titleTextHover}>{el}</motion.div>);
  };

  return (
    <PageContainer>
      <StyledHome
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Title variants={titleAnim} initial="initial" animate="animate">
          {createTitle("BlackJax")}
        </Title>
        <Link to="/gamin">
          <PlayBtn
            variants={btnAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="active"
          >
            Play
          </PlayBtn>
        </Link>
        <Link to="/about">
          <AboutBtn
            variants={btnAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="active"
          >
            About
          </AboutBtn>
        </Link>
      </StyledHome>
    </PageContainer>
  );
};

const PlayBtn = styled(motion.button)`
  font-weight: 400;
  padding: 1rem 4.2rem;
  margin-bottom: 4rem;
`;

const AboutBtn = styled(PlayBtn)`
  padding: 1rem 2.5rem;
  margin-bottom: 0rem;
`;

const Title = styled(motion.div)`
  display: flex;
  position: relative;
  font-size: 8rem;
  font-weight: 300;
  margin-bottom: 15rem;

  @media only screen and (max-width: 21.875em) {
    font-size: 7rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background-color: #ffffff;
    animation: lineAnim 0.5s ease-out 0.6s forwards;

    @keyframes lineAnim {
      0% {
        width: 0%;
      }
      100% {
        width: 60%;
      }
    }
  }
`;

const StyledHome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export default Home;
