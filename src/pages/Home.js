import React from "react";
// Components
// Redux
// import { useDispatch, useSelector } from "react-redux";
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
          <Play
            variants={btnAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="active"
          >
            Play
          </Play>
        </Link>
        <Link to="/credits">
          <Credits
            variants={btnAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="active"
          >
            Credits
          </Credits>
        </Link>
      </StyledHome>
    </PageContainer>
  );
};

const Play = styled(motion.button)`
  font-weight: 400;
  padding: 0.5rem 4.2rem;
  margin-bottom: 2rem;
`;

const Credits = styled(Play)`
  padding: 0.5rem 2.5rem;
`;

const Title = styled(motion.div)`
  display: flex;
  position: relative;
  font-size: 8rem;
  font-weight: 300;
  margin-bottom: 15rem;
  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #ffffff;
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
