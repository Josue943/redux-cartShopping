import React, { useEffect } from "react";
import styled from "@emotion/styled";
import img from "../../assets/hero.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/products";
import ProductCard from "../Layout/ProductCard";
import ProductsContainer from "../Layout/ProductContainer";
import { Link } from "react-router-dom";

const Home = () => {
  const products = useSelector(state =>
    state.products.products.filter(product => product.featured)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container>
      <div className="hero">
        <div className="box">
          <h1>Think, Code, Deploy</h1>
          <p>Embrace your choices - we do</p>
          <Link to="/products" className="button">
            Our Products
          </Link>
        </div>
      </div>
      <h2>Featured Products</h2>
      <ProductsContainer>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  height: 100%;
  padding-bottom: 30px;
  .hero {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.7) 50%,
        hsla(0, 0%, 100%, 0.1)
      ),
      url(${img}) 50% / cover no-repeat;
    min-height: 65vh;
    min-width: 100%;
    display: flex;
    flex-flow: wrap column;
    justify-content: center;

    .box {
      align-items: center;
      color: #c02c03;
      width: 90%;
      margin: auto;
    }
    h1 {
      font-size: 5rem;
      padding: 15px 0;
    }
    p {
      font-size: 28px;
      padding-bottom: 25px;
    }
    .button {
      margin: 10px 0;
      width: 300px;
      padding: 15px;
      border: 1px solid #c02c03;
      background: #c02c03;
      outline-color: none;
      text-transform: uppercase;
      transition: 0.5s all ease-in;
      font-size: 22px;
      color: black;
      cursor: pointer;
      :hover {
        background: transparent;
        color: #c02c03;
      }
    }
  }
  h2 {
    padding: 25px;
    text-align: center;
  }
`;

export default Home;
