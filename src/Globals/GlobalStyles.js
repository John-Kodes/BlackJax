import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%; // 1 rem = 10px

        @media only screen and (max-width: 28em){
        font-size: 50%; // 1 rem = 10px

        }
    }
    body{
        font-family:'Montserrat', sans-serif;
        background-color: #333;
        color: white;
        user-select: none;
    }
    h1{
        font-weight: 400;
    }
    h3{
      font-weight: 400;
      font-size: 3rem;

      @media only screen and (max-width: 60em) {
        font-size: 2rem;
      }
    }
    h4{
      font-weight: 400;
      font-size: 2rem;


    }
    button {
        box-sizing: content-box;
        font-family:'Montserrat', sans-serif;
        color: white;
        font-size: 2.4rem;
        padding: 0.5rem 1.2rem;

        font-weight: 600;
        background-color: #13131b;
        border-radius: 4px;
        border: none;
        cursor: pointer;

        
    }

`;

export const StyledHand = styled(motion.div)`
  height: 20rem;

  position: relative;

  @media only screen and (max-width: 45em) {
    transform: scale(0.9);
  }
  @media only screen and (max-width: 36.5em) {
    transform: scale(0.8);
  }
  @media only screen and (max-width: 31em) {
    transform: scale(0.62);
  }
  @media only screen and (max-width: 28em) {
    transform: scale(1);
  }
`;

export const PlayingBtn = styled(motion.button)`
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  border: 1px solid transparent;
  transition: all 0.3s;

  @media only screen and (max-width: 39em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 28em) {
    font-size: 2rem;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1.3rem 2.2rem rgba(0, 0, 0, 0.3);
    background-color: #1e1e2b;
    border: 1px solid #999999;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    background-color: #13131b;

    border: 1px solid #ffdc43;
  }

  &:disabled {
    filter: brightness(40%);

    &:hover {
      background-color: #13131b;
      transform: none;
      border: 1px solid transparent;
    }
  }
`;

export const PageContainer = styled(motion.div)`
  overflow: hidden;
`;

export default GlobalStyles;
