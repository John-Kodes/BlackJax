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
  // [{link, label}, ...]
  const createLinkBtns = () => {
    const linksArr = [
      {
        link: "/login",
        label: "Login",
      },
      {
        link: "/gamin",
        label: "Play as guest",
      },
      {
        link: "/leaderboard",
        label: "Leaderboard",
      },
      {
        link: "/about",
        label: "About",
      },
    ];
    return linksArr.map((el) => (
      <Link to={el.link}>
        <Btn
          variants={btnAnimation}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="active"
        >
          {el.label}
        </Btn>
      </Link>
    ));
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
        {createLinkBtns()}
      </StyledHome>
    </PageContainer>
  );
};

const Btn = styled(motion.button)`
  font-weight: 400;
  font-size: 2.2rem;
  min-width: 20rem;
`;

const Title = styled(motion.div)`
  display: flex;
  position: relative;
  font-size: 8rem;
  font-weight: 300;
  margin-bottom: 12rem;

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
  gap: 1rem;

  height: 100vh;
`;

export default Home;
