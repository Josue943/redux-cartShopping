import { ADD_TO_CART, DECREASE_ITEM, REMOVE_ITEM } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
  cart: {},
  totalItems: 0,
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedProduct = action.payload;
      let updateOrNewItem;
      if (state.cart[addedProduct.id]) {
        updateOrNewItem = new CartItem(
          state.cart[addedProduct.id].title,
          addedProduct.img,
          addedProduct.price,
          state.cart[addedProduct.id].quantity + 1
        );
      } else {
        updateOrNewItem = new CartItem(
          addedProduct.title,
          addedProduct.img,
          addedProduct.price,
          1
        );
      }
      return {
        cart: { ...state.cart, [addedProduct.id]: updateOrNewItem },
        totalItems: state.totalItems + 1,
        total: state.total + addedProduct.price
      };

    case DECREASE_ITEM:
      let item = state.cart[action.payload];
      let cartItems = state.cart;
      if (item.quantity === 1) {
        delete cartItems[action.payload];
      } else {
        item.quantity = item.quantity - 1;
        cartItems = { ...cartItems, [action.payload]: item };
      }
      return {
        cart: cartItems,
        total: state.total - item.price,
        totalItems: state.totalItems - 1
      };

    case REMOVE_ITEM:
      let removeItem = action.payload;
      let newArray = state.cart;
      delete newArray[removeItem.id];
      return {
        cart: newArray,
        total: state.total - removeItem.price * removeItem.quantity,
        totalItems: state.totalItems - removeItem.quantity
      };

    default:
      return state;
  }
};

export default cartReducer;
