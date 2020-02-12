import React, { Component } from "react";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import ToggleableProductForm from "./ToggleableProductForm";
import client from "../lib/client.js";

class Shop extends Component {
  state = {
    products: [],
    cart: [] // [{title, price, order_quantity}, {titl2, price2, order_quanity}]
  };

  componentDidMount = () => {
    client
      .get("/api/products")
      .then(products =>
        this.setState({
          products
        })
      )
      .catch(error => console.log(error));
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
    // find if item is in cart
    // if yes then update the ordered_quanity
    // if no then add the item and set ordered_quanity to 1
    // make sure to decrement the quantity available.
    // make sure that add to cart doesn't display if the quantity available is 0
  };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart products={this.state.cart} />
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
