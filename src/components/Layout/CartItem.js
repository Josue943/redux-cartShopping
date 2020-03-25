import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { addToCart, decreaseItem, removeItem } from "../store/actions/cart";

const CartItem = ({ item }) => {
  const { img, title, price, quantity, id } = item;
  const dispatch = useDispatch();

  const onIncreaseProduct = () => {
    dispatch(addToCart(item));
  };
  const onDecreaseProduct = () => {
    dispatch(decreaseItem(id));
  };
  const onRemoveProduct = () => {
    dispatch(removeItem(item));
  };
  return (
    <Card>
      <div className="img-container">
        <img src={img} />
      </div>
      <div className="info">
        <h4>{title}</h4>
        <h5>${price}</h5>
        <a onClick={onRemoveProduct}>remove</a>
      </div>
      <div className="quantity">
        <i className="fas fa-arrow-up" onClick={onIncreaseProduct}></i>
        <span>{quantity}</span>
        <i className="fas fa-arrow-down" onClick={onDecreaseProduct}></i>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 110px;
  margin-bottom: 10px;
  .img-container {
    flex-basis: 100px;
    justify-items: center;
    padding: 20px;
  }
  .info {
    flex: 1;
    padding: 20px;
    letter-spacing: 3px;
    h4 {
      font-size: 15px;
    }
    h5 {
      font-size: 14px;
      padding: 10px 0;
    }
    a {
      opacity: 0.6;
      cursor: pointer;
    }
  }
  .quantity {
    display: flex;
    height: 110px;
    flex-flow: column wrap;
    justify-content: center;
    font-size: 15px;
    i {
      color: #f15025;
      padding: 5px;
      cursor: pointer;
    }
    span {
      text-align: center;
    }
  }
`;

export default CartItem;
