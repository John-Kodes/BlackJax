import React from "react";
// Components
import UserRank from "./UserRank";
import PaginationController from "./PaginationController";
// Styling
import styled from "styled-components";

const Loading = ({ ranks, setPage, page, resultsLength }) => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
