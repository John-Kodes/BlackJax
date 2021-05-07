import React from "react";
// Components
// style
import styled from "styled-components";
import { PlayingBtn } from "../../Globals/GlobalStyles";

const BtnDeal = () => {
  return (
    <>
      <StyledBtnDeal>DEAL</StyledBtnDeal>
    </>
  );
};

const StyledBtnDeal = styled(PlayingBtn)`
  background-color: #f2ce30;
  color: black;
  border: 1px solid transparent;
  font-size: 5rem;
  padding: 1rem 2rem;

  &:hover {
    background-color: #f1ce30;
    color: black;
    border: 1px solid transparent;
    filter: brightness(115%);
  }

  &:active {
    background-color: #f1ce30;
    color: black;
    border: 1px solid transparent;
    filter: brightness(80%) hue-rotate(-10deg);
  }
`;

export default BtnDeal;
