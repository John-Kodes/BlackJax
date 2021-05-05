import React from "react";
// Styling
import { PlayingBtn } from "../../Globals/GlobalStyles";
// Redux
import { useDispatch } from "react-redux";
import { resetGame } from "../gameSlice";
import { resetCards } from "../cardsSlice";

const BtnInsurance = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(resetGame());
    dispatch(resetCards());
  };

  return <PlayingBtn onClick={toggle}>🩺 RESET</PlayingBtn>;
};

export default BtnInsurance;
