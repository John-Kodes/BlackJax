import React from "react";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PaginationController = ({ page, setPage, results }) => {
  const btnHandler = (incre) => {
    if (incre === "+") {
      setPage(page++);
    }
  };

  return (
    <PaginationBox>
      <PageBtn onClick={() => btnHandler("-")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PageBtn>
      <PageNum>1</PageNum>
      <Of>of</Of>
      <PageNum>6</PageNum>
      <PageBtn onClick={() => btnHandler("+")}>
        <FontAwesomeIcon icon={faChevronRight} />
      </PageBtn>
    </PaginationBox>
  );
};
const Of = styled.div`
  font-size: 1.6rem;
  padding: 0 1rem;
`;

const PageNum = styled.button`
  background-color: transparent;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-0.3rem);
  }
`;

const PageBtn = styled.button`
  background-color: transparent;

  color: #fff;
  font-size: 2rem;
`;

const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  padding: 0 1rem;
  background-color: rgba(22, 15, 31, 0.8);
  border: 2px solid #7f7597;
  border-bottom: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export default PaginationController;
