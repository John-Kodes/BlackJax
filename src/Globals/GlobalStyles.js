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
    }
    body{
        font-family:'Montserrat', sans-serif;
        background-color: #333;
        color: white;
    }
    h1{
        font-weight: 400;
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

    ::selection{
        background-color: #f2ce30;
        color: black;
    }
`;

export const PlayingBtn = styled(motion.button)`
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  border: 1px solid transparent;
  transition: all 0.3s;

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
`;

export default GlobalStyles;
