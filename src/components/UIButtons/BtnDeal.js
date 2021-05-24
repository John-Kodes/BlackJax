import React from "react";
// style
import styled from "styled-components";
import { PlayingBtn } from "../../Globals/GlobalStyles";

const BtnDeal = ({ click, betTotal }) => {
  return (
    <StyledBtnDeal onClick={click} disabled={betTotal < 1}>
      DEAL
    </StyledBtnDeal>
  );
};

const StyledBtnDeal = styled(PlayingBtn)`
  background-color: #f2ce30;
  color: black;
  border: 4px solid transparent;
  font-size: 5rem;
  padding: 0.5rem 1.5rem;

  transition: all 0.2s;

  @media only screen and (max-width: 33.875em) {
    font-size: 3rem;
  }

  &:hover {
    background-color: #f1ce30;
    color: black;
    border: 4px solid transparent;
    filter: brightness(115%);
  }

  &:active {
    background-color: #f1ce30;
    color: black;
    border: 4px solid transparent;
    filter: brightness(80%) hue-rotate(-10deg);
  }

  &:disabled {
    background-color: transparent;
    color: white;
    border: 4px solid #ffffff;
    filter: none;
    &:hover {
      background-color: transparent;
      color: white;
      border: 4px solid #ffffff;
    }
  }
`;

export default BtnDeal;
