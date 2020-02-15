import React, { Component } from "react";
import Cart from "./Cart";
import ProductsListContainer from "./ProductsListContainer";
import ToggleableProductForm from "./ToggleableProductForm";

const Shop = () => (
  <div id="app">
    <header>
      <h1>The Shop!</h1>
      <Cart />
    </header>

    <main>
      <ProductsListContainer />
      <ToggleableProductForm />
    </main>
  </div>
);

export default Shop;
