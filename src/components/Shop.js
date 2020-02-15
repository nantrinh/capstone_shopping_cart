import React, { Component } from "react";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import ToggleableProductForm from "./ToggleableProductForm";

class Shop extends Component {
  state = {
    products: [],
    cart: []
  };

  // Move this to productsList or Product?
  // handleAddToCartClick = id => {
  //   this.setState
  // };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>

        <main>
          <ProductsList />
          <ToggleableProductForm />
        </main>
      </div>
    );
  }
}

export default Shop;
