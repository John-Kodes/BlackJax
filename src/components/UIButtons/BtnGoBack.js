import React from "react";
// Router
import { Link } from "react-router-dom";
// Styling
import styled from "styled-components";
//Animation
import { backBtnAnim } from "../../animations";
import { motion } from "framer-motion";

const GoBackBtn = () => {
  return (
    <Link to="/">
      <StyledGoBackBtn
        variants={backBtnAnim}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        &larr; Back
      </StyledGoBackBtn>
    </Link>
  );
};

const StyledGoBackBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 2rem;
  left: 2rem;
  padding: 0.5rem 1.5rem;
  z-index: 200;

  border-radius: 4px;
  background-color: rgba(18, 16, 24, 1);
  border: 1px solid #7f7597;
  color: #7f7597;
  font-size: 1.6rem;

  transition: color 0.5s;

  @media only screen and (max-width: 69.62em) {
    top: 3.5rem;
  }
  @media only screen and (max-width: 58.75em) {
    top: 2rem;
  }

  &:hover {
    color: white;
  }
`;

export default GoBackBtn;
