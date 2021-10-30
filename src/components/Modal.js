import React from "react";
// Styling
import styled from "styled-components";

const Modal = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 6rem 4rem 3rem;
  width: 100%;
  max-width: 46rem;

  background-color: rgba(18, 16, 24, 0.6);
  border-radius: 4px;
  border: 1px solid #7f7597;

  h1 {
    display: inline-flex;
    align-items: center;
    gap: 2rem;

    font-size: 2.8rem;

    svg {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.6rem;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.gold};
    }
  }
`;

export default Modal;
