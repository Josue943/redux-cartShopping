import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <Container>
      <h4>Empty Cart......</h4>
      <Link to="/products" className="button">
        FILL IT
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin: 80px auto;
  text-align: center;
  h4 {
    font-size: 23px;
    padding-bottom: 20px;
  }
  .button {
    background: #f15025;
    border: 1px solid #f15025;
    padding: 8px 20px;
    color: white;
    transition: 0.5s all linear;
    :hover {
      color: #f15025;
      background: transparent;
    }
  }
`;

export default Empty;
