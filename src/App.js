import React from "react";
import Header from "./components/Layout/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";
import productsReducer from "./components/store/reducers/products";
import cartReducer from "./components/store/reducers/cart";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
