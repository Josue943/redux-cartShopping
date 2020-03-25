import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/products";
import { addToCart } from "../store/actions/cart";

const Product = ({ match }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const data = useSelector(state =>
    state.products.products.find(prod => prod.id === parseInt(match.params.id))
  );
  useEffect(() => {
    if (data) return setProduct(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { title, img, price } = product;
  return (
    <Container>
      <div className="img-container">
        <img src={img} />
      </div>
      <div className="info">
        <h1>{title}</h1>
        <h3>${price}</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 80px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (max-width: 1080px) {
    justify-content: center;
  }
  .img-container {
    padding: 25px;
    flex-basis: 300px;
    @media (max-width: 1080px) {
      flex-basis: 240px;
    }
    @media (max-width: 900px) {
      flex-basis: 90%;
      height: 350px;
      text-align: center;
      margin-bottom: 28px;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .info {
    flex-basis: 68%;
    letter-spacing: 2px;
    @media (max-width: 900px) {
      flex-basis: 95%;
    }

    h1 {
      font-size: 40px;
      text-transform: capitalize;
    }
    h3 {
      padding: 15px 0;
      color: #f15025;
      font-size: 25px;
    }
    p {
      line-height: 30px;
    }
    button {
      margin-top: 30px;
      cursor: pointer;
      padding: 8px;
      font-size: 17px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: white;
      font-weight: 600;
      width: 100%;
      background: #f15025;
      border-color: #f15025;
      box-shadow: 0 3px 0 gray;
      transition: 0.5s all linear;
      :hover {
        color: #f15025;
        background: transparent;
      }
    }
  }
`;

export default Product;
