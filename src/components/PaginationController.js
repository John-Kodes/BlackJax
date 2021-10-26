import React from "react";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PaginationController = ({ page, setPage, resultsLength }) => {
  const lastPage = Math.ceil(resultsLength / 20); // resultsLength / resultsPerPageLength

  const btnHandler = (incre) => {
    // short for increment
    if (incre === "+") {
      console.log("btn clicked", page);
      setPage(page + 1);
    }
    if (incre === "-") {
      setPage(page - 1);
    }
  };

  return (
    <PaginationBox>
      <PageBtn
        onClick={() => btnHandler("-")}
        disabled={page > 1}
        style={page > 1 ? {} : { pointerEvents: "none", opacity: "0.4" }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </PageBtn>
      <PageNum>{page}</PageNum>
      <Of>of</Of>
      <PageNum>{lastPage}</PageNum>
      <PageBtn
        disabled={page < lastPage}
        onClick={() => btnHandler("+")}
        style={page < lastPage ? {} : { pointerEvents: "none", opacity: "0.4" }}
      >
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
  min-width: 2ch;
  padding: 0;

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.3rem);
  }
`;

const PageBtn = styled.button`
  background-color: transparent;

  color: #fff;
  font-size: 2rem;

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.3rem);
  }
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
