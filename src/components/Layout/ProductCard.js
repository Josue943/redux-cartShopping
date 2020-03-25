import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { img, price, title, id } = product;
  return (
    <Card>
      <div className="img-container">
        <img src={img} />
      </div>
      <div className="card-footer">
        <h4>{title}</h4>
        <span>${price}</span>
      </div>
      <Link className="button" to={`/product/${id}`}>
        Details
      </Link>
    </Card>
  );
};

const Card = styled.div`
  height: 290px;
  padding: 10px;
  position: relative;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  box-shadow: 1px 4px 0 gray;
  transition: 0.5s all ease-in;
  :hover {
    box-shadow: 3px 6px 0 gray;
    .img-container {
      opacity: 0.3;
    }
    .button {
      opacity: 1;
    }
  }
  .img-container {
    padding-top: 15px;
    height: 160px;
    text-align: center;
    transition: 0.5s all linear;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .card-footer {
    padding: 30px;
    text-align: center;
    letter-spacing: 3px;
    h4 {
      padding-bottom: 5px;
    }
    span {
      color: #f15025;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .button {
    padding: 5px 15px;
    font-size: 17px;
    letter-spacing: 3.5px;
    background: #f15025;
    border: 1px solid #f15025;
    color: white;
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 35%;
    left: 25%;
    transition: 0.5s all linear;
    :hover {
      color: #f15025;
      background: transparent;
    }
  }
`;

export default ProductCard;
