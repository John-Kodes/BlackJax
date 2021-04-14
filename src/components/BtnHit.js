import React from "react";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { drawCard } from "../actions/cardAction";

const BtnHit = () => {
  const dispatch = useDispatch();
  const drawCardHandler = () => {
    dispatch(drawCard());
  };

  return <StyledBtn onClick={drawCardHandler}>🎯 HIT</StyledBtn>;
};

const StyledBtn = styled(motion.button)``;

export default BtnHit;
