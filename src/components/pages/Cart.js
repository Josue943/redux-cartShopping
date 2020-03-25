import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import CartItem from "../Layout/CartItem";
import Empty from "../Layout/Empty";

const Cart = () => {
  const total = useSelector(state => state.cart.total);
  const cart = useSelector(state => {
    const items = [];
    for (const key in state.cart.cart) {
      items.push({
        id: key,
        img: state.cart.cart[key].img,
        title: state.cart.cart[key].title,
        price: state.cart.cart[key].price,
        quantity: state.cart.cart[key].quantity
      });
    }
    return items.sort((a, b) => (a.id > b.id ? 1 : -1));
  });
  if (!Object.keys(cart).length) return <Empty />;
  return (
    <CardContainer>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
      <button>Pay</button>
      <h1>Total : $ {total}</h1>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: 80px auto;
  width: 95%;
  max-width: 700px;

  h2 {
    text-align: center;
    font-size: 25px;
    letter-spacing: 2.8px;
    padding-bottom: 20px;
  }
  h1 {
    padding-top: 15px;
    text-align: center;
    letter-spacing: 2.8px;
    font-size: 25px;
  }
  button {
    margin-top: 20px;
    background: #f15025;
    border-color: #f15025;
    font-size: 16px;
    font-weight: 600;
    color: white;
    width: 100%;
    padding: 6px;
    transition: 0.5s all linear;
    :hover {
      color: #f15025;
      background: transparent;
    }
  }
`;

export default Cart;
