import React from "react";
// Styling
import styled from "styled-components";
import { PageContainer } from "../Globals/GlobalStyles";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
// Routing
import { Link } from "react-router-dom";

const Home = () => {
  const btnAnimation = {
    initial: {
      opacity: 0,
      border: "2px solid transparent",
      background: "rgba(0,0,0,0)",
    },
    animate: {
      opacity: 1,
    },
    hover: {
      y: -5,
      border: "2px solid white",
      background: "#04002452",
    },
    active: {
      y: 2,
    },
  };

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

  return (
    <PageContainer>
      <StyledHome
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Title variants={titleAnim} initial="initial" animate="animate">
          <motion.div whileHover={titleTextHover}>B</motion.div>
          <motion.div whileHover={titleTextHover}>l</motion.div>
          <motion.div whileHover={titleTextHover}>a</motion.div>
          <motion.div whileHover={titleTextHover}>c</motion.div>
          <motion.div whileHover={titleTextHover}>k</motion.div>
          <motion.div whileHover={titleTextHover}>&nbsp;</motion.div>
          <motion.div whileHover={titleTextHover}>J</motion.div>
          <motion.div whileHover={titleTextHover}>a</motion.div>
          <motion.div whileHover={titleTextHover}>x</motion.div>
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
