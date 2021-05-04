import React from "react";
// Styling
import { PlayingBtn } from "../../Globals/GlobalStyles";
// Redux
import { useDispatch } from "react-redux";
import { resetRound } from "../gameSlice";
import { resetCards } from "../cardsSlice";

const BtnInsurance = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    console.log("button pressed");
    dispatch(resetRound());
    dispatch(resetCards());
  };

  return <PlayingBtn onClick={toggle}>🩺 RESET</PlayingBtn>;
};

export default BtnInsurance;
