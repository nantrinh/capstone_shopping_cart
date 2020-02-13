import React, { Component } from "react";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import ToggleableProductForm from "./ToggleableProductForm";
import client from "../lib/client.js";

class Shop extends Component {
  state = {
    products: [],
    cart: [],
  };
  handleAddSubmit = product => {
    client
      .post(`/api/products`, product)
      .then(product => {
        this.setState(prevState => ({
          products: prevState.products.concat(product)
        }));
      })
      .catch(error => console.log(error));
  };

  handleEditSubmit = (properties, id) => {
    client.put(`/api/products/${id}`, properties).then(product => {
      let products = this.state.products.map(prod => {
        if (prod.id === id) {
          return Object.assign({}, product);
        }
        return prod;
      });

      this.setState({ products });
    });
  };

  // should deleting object also delete from cart??
  handleDeleteClick = id => {
    client.delete(`/api/products/${id}`).then(() => {
      const products = this.state.products.filter(product => {
        return product.id !== id;
      });

      this.setState({ products });
    });
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
          <ProductsList
            products={this.state.products}
            onSubmit={this.handleEditSubmit}
            onDelete={this.handleDeleteClick}
          />
          <ToggleableProductForm onSubmit={this.handleAddSubmit} />
        </main>
      </div>
    );
  }
}

export default Shop;
