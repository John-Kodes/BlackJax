import React, { useContext, useState } from "react";
// Components
import Loading, { LoadingContainer } from "../../components/loadingEl";
// Context
import AuthContext from "../../AuthContext";
// Styling
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { btnAnimation, fadeInOut } from "../../animations";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";

/* if user === "pending" then page should be loading
 */

const BtnSettings = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(AuthContext);

  const BtnHandler = () => {
    console.log("click");
  };

  const closeCss = {
    width: "9rem",
    borderColor: "transparent",
    color: "transparent",
  };

  return (
    <>
      {user && (
        <Container
          style={isOpen ? closeCss : {}}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Btn>
            <FontAwesomeIcon icon={isOpen ? faCog : faTimes} />
          </Btn>
          <ul>
            <li>View profile</li>
            <li>Logout</li>
          </ul>
        </Container>
      )}
    </>
  );
};

const Btn = styled.button`
  position: relative;
  border: 2px solid transparent;
  border-radius: 100%;
  background-color: transparent;
  transition: all 0.1s;

  padding: 0;
  margin-right: 1.4rem;
  min-height: 5.8rem;
  min-width: 5.8rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    height: 0;
    width: 0;
    border-radius: 100%;

    background-color: #3a3250;
    transition: all 0.2s;
  }

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
    }
  }

  &:active {
    filter: brightness(0.8) saturate(1.6);
  }

  svg {
    transition: all 0.1s;
    color: rgb(255, 255, 255);
    font-size: 4rem;
  }
`;
//7f7597

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;

  position: fixed;
  top: 1rem;
  right: 1rem;
  height: 10rem;
  width: 24rem;

  font-size: 2rem;
  font-weight: 400;
  color: #7f7597;

  border: 2px solid #7f7597;
  border-radius: 4px;
  overflow: hidden;

  transition: all 0.4s;
  /* width: 9rem; */

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    position: relative;
    font-weight: 600;
    width: fit-content;
    white-space: nowrap;

    &::before {
      content: "";
      position: absolute;
      bottom: -0px;
      width: 0%;
      height: 2px;

      background-color: #fff;
      transition: all 0.2s;
    }

    &:hover {
      color: #fff;
      &::before {
        width: 100%;
      }
    }
  }
`;

export default BtnSettings;
