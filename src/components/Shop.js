import React from "react";
import CartContainer from "./CartContainer";
import ProductListContainer from "./ProductListContainer";
import ToggleableProductForm from "./ToggleableProductForm";

const Shop = () => (
  <div id="app">
    <header>
      <h1>The Shop!</h1>
      <CartContainer />
    </header>

    <main>
      <ProductListContainer />
      <ToggleableProductForm />
    </main>
  </div>
);

export default Shop;
