import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/products";
import ProductCard from "../Layout/ProductCard";
import Select from "../common/Select";
import Checkbox from "../common/Checkbox";
import RadioButtons from "../common/RadioButtons";
import SearchBox from "../common/SearchBox";
import ProductsContainer from "../Layout/ProductContainer";
import Pagination from "../common/Pagination";
import { paginate, filterPrice } from "../utils/helpers";
import _ from "lodash";

const Products = () => {
  const state = useSelector(state => state.products);
  const { products } = state;
  const [filteredData, setFilteredData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  //
  const [category, setCategory] = useState("all");
  const [shipping, setShipping] = useState(false);
  const [rangePrice, setRangePrice] = useState({ id: 0 });
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const filterData = () => {
      let filtered = products;
      if (category !== "all")
        filtered = products.filter(product => product.category === category);
      //
      filtered = filterPrice(filtered, rangePrice);
      //
      if (shipping) filtered = filtered.filter(product => product.shipping);
      if (query.trim() !== "")
        filtered = filtered.filter(product =>
          product.title.toLowerCase().startsWith(query.toLowerCase())
        );
      let tPages = Math.ceil(filtered.length / 4);
      if (tPages !== totalPages) {
        setTotalPages(tPages);
        setCurrentPage(1);
      }
      setTotalProducts(filtered.length);
      setFilteredData(paginate(filtered, currentPage, 4));
    };
    filterData();
  }, [category, products, shipping, rangePrice, query, currentPage]);

  // products.sort((a, b) => (a["price"] < b["price"] ? -1 : 1))

  return (
    <Container>
      <div className="search">
        <h4>Search Products</h4>
        <div className="filter-options">
          <div className="rigth-options">
            <SearchBox query={query} setQuery={setQuery} />
            <Select setCategory={setCategory} category={category} />
            <Checkbox
              shipping={shipping}
              setShipping={() => setShipping(!shipping)}
            />
          </div>
          <div className="left-options">
            <RadioButtons
              rangePrice={rangePrice}
              setRangePrice={setRangePrice}
            />
          </div>
        </div>
        <p>Total Products : {totalProducts} </p>
      </div>
      <ProductsContainer>
        {filteredData.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductsContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-flow: wrap column;
  .search {
    width: 340px;
    margin: 80px auto;
    border-bottom: 1px solid black;
    h4 {
      text-align: center;
      font-size: 30px;
      letter-spacing: 3px;
      padding-bottom: 60px;
      font-weight: 300;
    }
    .filter-options {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      .rigth-options {
        flex-basis: 160px;
      }
      .left-options {
        flex-basis: 160px;
      }
    }
    p {
      font-size: 20px;
      letter-spacing: 2px;
      padding: 15px;
      text-align: center;
    }
  }
`;

export default Products;
