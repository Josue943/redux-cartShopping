export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addToCart = product => {
  return dispatch => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };
};

export const decreaseItem = id => {
  return dispatch => {
    dispatch({ type: DECREASE_ITEM, payload: id });
  };
};

export const removeItem = id => {
  return dispatch => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
};
