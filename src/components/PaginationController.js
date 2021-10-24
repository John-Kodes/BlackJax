import React from "react";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PaginationController = ({ ranks }) => {
  return (
    <PaginationBox>
      <PageBtn>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PageBtn>
      <PageNum>1</PageNum>
      <PageNum>2</PageNum>
      <PageNum>3</PageNum>
      <PageNum>...</PageNum>
      <PageNum>99</PageNum>
      <PageBtn>
        <FontAwesomeIcon icon={faChevronRight} />
      </PageBtn>
    </PaginationBox>
  );
};

const PageNum = styled.button`
  background-color: transparent;
`;

const PageBtn = styled.button`
  background-color: transparent;

  color: #fff;
  font-size: 2rem;
`;

const PaginationBox = styled.div`
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
