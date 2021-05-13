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
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const Card = ({ suit, value }) => {
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
      <StyledCardBorder className="front">
        <StyledCard>
          {/* {console.log("card component being re-rendered")} */}
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
      <StyledCardBorder className="back">
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
                1
              </div>
              <div
                className="suit"
                style={{
                  color: `${
                    suit === "D" ? "#f2ce30" : suit === "H" ? "#f2ce30" : "#ddd"
                  }`,
                }}
              >
                2
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
              3
            </StyledCardArt>
          </StyledCardContent>
        </StyledCard>
      </StyledCardBorder>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  position: relative;

  height: 20.5rem;
  width: 15rem;
  transform: perspective(40rem);

  transition: all 2s;

  & > .front {
    transform: perspective(40rem) rotateY(0deg);
    backface-visibility: hidden;
  }
  &:hover > .front {
    transform: perspective(40rem) rotateY(180deg);
  }

  & > .back {
    transform: perspective(40rem) rotateY(-180deg);
    backface-visibility: hidden;
  }
  :hover& > .back {
    transform: perspective(40rem) rotateY(0deg);
  }
`;

const StyledCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;

  height: 20rem;
  width: 14.5rem;
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
  padding: 2px;
  border-radius: 1.2rem;
  background: linear-gradient(to top right, #181722 10%, #222631 90%, #424858);

  transition: all 2s;
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
