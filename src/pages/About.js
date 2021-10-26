import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
// Util
import BasePage from "../util/BasePage";

const About = () => {
  return (
    <BasePage>
      <StyledAbout>
        <MessageBox>
          <h1>About</h1>
          <p>
            BlackJax is a recreation of the card game "BlackJack", made with the
            React framework. This project helped so much in enforcing and
            practicing everything I've learned about React and libraries,
            especially Redux. This was a tough and more complex challenge than I
            initially thought but I had fun and what came out of it was a fun
            little game that people can enjoy including myself 😊 <br />
            <br />I also chose to recreate BlackJack because I enjoy the
            strategy aspect behind it like "card counting". I DO NOT endorse
            gambling. Just to make things clear. To learn how difficult
            BlackJack really is, try to get $20 000 without losing all your
            money 🍀
          </p>
        </MessageBox>
      </StyledAbout>
    </BasePage>
  );
};

const MessageBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  max-width: 100rem;
  width: 100%;
  background-color: rgba(18, 16, 24, 0.6);
  padding: 2rem;

  border-radius: 4px;
  border: 1px solid #7f7597;
  overflow: scroll;

  @media only screen and (max-width: 31em) {
    padding-top: 10rem;
  }
  @media only screen and (max-width: 28em) {
    padding-top: 0rem;
  }

  &::-webkit-scrollbar {
    width: 6px;

    &-thumb {
      background-color: rgba(127, 117, 151, 0.2);
      outline: 1px solid #7f7597;
    }

    &-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &-corner {
      visibility: hidden;
    }
  }

  h1 {
    font-size: 6rem;
    font-weight: 300;
    margin: 3rem 0;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.6rem;
    max-width: 65ch;
    width: 100%;
    line-height: 2;
    word-spacing: 2px;
    text-align: justify;
  }
`;

const StyledAbout = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 2rem;
`;

export default About;
