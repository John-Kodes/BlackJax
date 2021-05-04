import React from "react";
// Styling
import { PlayingBtn } from "../../Globals/GlobalStyles";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { outputResults } from "../gameSlice";

const BtnInsurance = () => {
  const dispatch = useDispatch();

  const playerTotal = useSelector(
    (state) => state.cards.totalHandValue.playerHand
  );
  const dealerTotal = useSelector(
    (state) => state.cards.totalHandValue.dealerHand
  );

  const toggle = () => {
    dispatch(outputResults(playerTotal, dealerTotal));
  };

  return <PlayingBtn onClick={toggle}>🩺 RESET</PlayingBtn>;
};

export default BtnInsurance;
