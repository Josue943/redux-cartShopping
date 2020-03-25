import { Products } from "../../../data/Products";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS, payload: Products });
  };
};
