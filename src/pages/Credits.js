import React from "react";
// Router
import { Link } from "react-router-dom";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const Credits = () => {
  return (
    <StyledCredits>
      <MessageBox>
        <h1>About</h1>
        <p>
          BlackJax is a recreation of the card game "BlackJack", made with the
          React framework. This project helped so much in enforcing and
          practicing everything I've learned about React and libraries,
          especially Redux. This was a tough and more complex challenge than I
          initially thought but I had fun and what came out of it was a fun
          little game that people can enjoy including myself 😊 <br />
          <br />I also chose to recreate BlackJack because I enjoy the strategy
          aspect behind it like "card counting". I DO NOT endorse gambling. Just
          to make things clear. To learn how difficult BlackJack really is, try
          to get $20 000 without losing all your money 🍀
        </p>
      </MessageBox>
      <Link to="/">
        <GoBackBtn>
          <span>&larr;</span>
        </GoBackBtn>
      </Link>
    </StyledCredits>
  );
};

const GoBackBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 2rem;
  left: 2rem;
  height: 6rem;
  width: 6rem;

  border-radius: 50%;
  background-color: rgba(18, 16, 24, 0.6);
  border: 1px solid #7f7597;
  color: #7f7597;
  font-size: 3rem;

  span {
    margin-top: -0.7rem;
  }
`;

const MessageBox = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: rgba(18, 16, 24, 0.6);
  height: 60rem;
  width: 100rem;
  border-radius: 4px;
  border: 1px solid #7f7597;

  h1 {
    font-size: 6rem;
    font-weight: 300;
    margin: 8rem 0 3rem;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.6rem;
    width: 65ch;
    line-height: 2;
    word-spacing: 2px;
    text-align: justify;
  }
`;

const StyledCredits = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Credits;
