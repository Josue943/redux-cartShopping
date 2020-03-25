import React from "react";
import _ from "lodash";
import styled from "@emotion/styled";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages === 1) return null;
  const pages = _.range(1, totalPages + 1);
  return (
    <PaginationContainer>
      <ul>
        {pages.map(p => (
          <li
            key={p}
            value={p}
            className={currentPage === p ? "page-item active" : "page-item"}
            onClick={() => setCurrentPage(p)}
          >
            {p}
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  width: 95%;
  max-width: 300px;
  margin: 20px auto;
  ul {
    display: flex;
    justify-content: center;
  }
  .page-item {
    padding: 10px;
    text-align: center;

    color: #c02c03;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.5s all linear;
    :hover {
      background: #c02c03;
      color: black;
    }
  }
  .active {
    background: #c02c03;
    color: black;
  }
`;

export default Pagination;
