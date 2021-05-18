import React from "react";
// Components
import {
  ClubSmall,
  DiamondSmall,
  HeartSmall,
  SpadeSmall,
  JackFace,
  KingFace,
  QueenFace,
} from "../img/SvgCardArt";
import CardBackSvg from "../img/CardBackSVG";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Card = ({ suit, value, index }) => {
  const dealersTurn = useSelector((state) => state.game.dealerWillPlay);
  let hideBool = false;

  if (index === 0 && !dealersTurn) hideBool = true;

  const symbol = (s) => {
    switch (s) {
      case "D":
        return DiamondSmall();
      case "H":
        return HeartSmall();
      case "C":
        return ClubSmall();
      case "S":
        return SpadeSmall();
      default:
        return "err";
    }
  };

  const cardArt = (v, color) => {
    switch (v) {
      case "J":
        return JackFace(color, "-10 -25 160 183");
      case "K":
        return KingFace(color, "0 0 175 160");
      case "Q":
        return QueenFace(color, "-15 -15 125 250");
      default:
        return ":)";
    }
  };

  return (
    <CardContainer>
      <StyledCardBorder className={`front ${hideBool ? "front--animate" : ""}`}>
        <StyledCard>
          <StyledCardContent>
            <StyledCardID>
              <div
                className="value"
                style={{
                  color: `${
                    suit === "D" ? "#f2ce30" : suit === "H" ? "#f2ce30" : "#ddd"
                  }`,
                }}
              >
                {value}
              </div>
              <div
                className="suit"
                style={{
                  color: `${
                    suit === "D" ? "#f2ce30" : suit === "H" ? "#f2ce30" : "#ddd"
                  }`,
                }}
              >
                {symbol(suit)}
              </div>
            </StyledCardID>
            <StyledCardArt
              className="svg-container"
              style={{
                color: `${
                  suit === "D" ? "#f2ce30" : suit === "H" ? "#f2ce30" : "#ddd"
                }`,
              }}
            >
              {cardArt(
                value,
                `${
                  suit === "D" ? "#f2ce30" : suit === "H" ? "#f2ce30" : "#ddd"
                }`
              )}
            </StyledCardArt>
          </StyledCardContent>
        </StyledCard>
      </StyledCardBorder>
      <StyledCardBorder className={`back ${hideBool ? "back--animate" : ""}`}>
        <Cardback>{CardBackSvg("41 38  243 264")}</Cardback>
      </StyledCardBorder>
    </CardContainer>
  );
};
const Cardback = styled(motion.div)`
  height: 23rem;
  width: 17.15rem;
  overflow: hidden;
  svg {
    filter: contrast(120%) brightness(90%) hue-rotate(20deg);
  }
`;

const CardContainer = styled(motion.div)`
  position: relative;

  height: 20.5rem;
  width: 15rem;
  transform: perspective(40rem);

  transition: all 0.4s cubic-bezier(0.41, -0.39, 0.68, 1.35);

  &:hover {
    transform: translateY(-1rem);
  }

  & > .front {
    transform: perspective(40rem) rotateY(0deg);
    backface-visibility: hidden;
  }
  & > .front--animate {
    transform: perspective(40rem) rotateY(180deg);
  }

  & > .back {
    transform: perspective(40rem) rotateY(-180deg);
    backface-visibility: hidden;
  }
  & > .back--animate {
    transform: perspective(40rem) rotateY(0deg);
  }
`;

// So what i wanna do here is if have an active class that will be flipped if the element has the class.
// The front and back elements are the ones that are actually doing the animation.

const StyledCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;

  height: 23rem;
  width: 17.15rem;
  padding: 1rem;
  background-image: linear-gradient(to top right, #050608, #171a1f);
  color: black;
  border-radius: 1rem;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.3);
`;

const StyledCardBorder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;
  padding: 1.5px;
  border-radius: 1.2rem;
  background: linear-gradient(to top right, #181722 10%, #222631 90%, #424858);

  transition: inherit;
`;

const StyledCardContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const StyledCardID = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: -0.2rem;
  left: 0;

  font-size: 4rem;
  line-height: 1;

  .suit {
    margin-top: -0.2rem;
    font-size: 3rem;
  }
`;

const StyledCardArt = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 110%;

  // temp
  font-size: 8rem;
  font-weight: 600;
  color: white;

  position: absolute;
  right: -10px;
  bottom: 0;

  svg {
    width: 110%;
    height: 110%;
  }
`;

export default Card;
