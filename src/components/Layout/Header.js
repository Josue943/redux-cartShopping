import React from "react";
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <Nav>
      <h2 className="logo">
        Vintage <span>Tech</span>
      </h2>
      <ul>
        <NavLink to="/" exact activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
        <NavLink to="/products" activeClassName="selected">
          Products
        </NavLink>
        <NavLink to="/cart">
          Cart<span className="quantity">{totalItems}</span>
        </NavLink>
      </ul>
    </Nav>
  );
};

const Nav = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 95%;
  .logo {
    font-family: "Kaushan Script", cursive;
    color: #f15931;
    padding: 25px;
    text-align: center;
  }
  .logo span {
    color: black;
  }
  ul {
    display: flex;
    flex-flow: wrap row;
    a {
      color: black;
      font-size: 23px;
      font-weight: 100;
      padding: 5px 15px;
      cursor: pointer;
      :last-of-type {
        flex: 1;
        text-align: right;
      }
    }
  }
  .quantity {
    background: #f15025;
    font-size: 15px;
    padding: 2px 4px;
    border-radius: 50%;
    position: absolute;
    color: white;
  }
`;

export default Header;
