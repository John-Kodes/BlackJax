import React, { useCallback, useEffect, useState } from "react";
// Styling
import { PlayingBtn } from "../../Globals/GlobalStyles";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { distributeCards } from "../cardsSlice";

const BtnSplit = () => {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.cards.deckOfCards);
  const playerHandLength = useSelector((state) => state.cards.playerHand)
    .length;

  const [buttonClicked, setButtonClicked] = useState(false);

  console.log(playerHandLength);

  const dealCards = useCallback(() => {
    setTimeout(() => {
      dispatch(distributeCards(deck));
    }, 500);
  }, [dispatch, deck]);

  useEffect(() => {
    if (buttonClicked && playerHandLength < 2) dealCards();
    else setButtonClicked(false);
  }, [buttonClicked, dealCards]);

  const toggle = () => {
    setButtonClicked(true);
  };

  return <PlayingBtn onClick={toggle}>✂ START</PlayingBtn>;
};

export default BtnSplit;
