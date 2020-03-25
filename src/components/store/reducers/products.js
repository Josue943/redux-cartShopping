import { FETCH_PRODUCTS } from "../actions/products";

const initialState = {
  products: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.payload
      };

    default:
      return state;
  }
};

export default productsReducer;
