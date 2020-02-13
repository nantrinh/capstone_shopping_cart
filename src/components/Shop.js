import React, { Component } from "react";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import ToggleableProductForm from "./ToggleableProductForm";

class Shop extends Component {
  state = {
    products: [],
    cart: [],
  };
  
  handleAddToCartClick = id => {
    this.setState
  };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
//          <Cart products={this.state.cart} />
        </header>

        <main>
          <ProductsList />
          <ToggleableProductForm onSubmit={this.handleAddSubmit} />
        </main>
      </div>
    );
  }
}

export default Shop;
