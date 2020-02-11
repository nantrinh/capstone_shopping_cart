import React, { Component } from 'react';
import Cart from './Cart';
import ProductsList from './ProductsList';
import ToggleableProductForm from './ToggleableProductForm';
import client from '../lib/client.js';

class Shop extends Component {
  state = {
    products: [], 
  }

  componentDidMount = () => {
    client.get('/api/products')
      .then((products) => (
        this.setState({
          products,
        })
      )).catch(error => (
        console.log(error)
      ));
  };

  handleSubmit = (product) => {
    client.post(`/api/products`, product)
      .then((product) => {
        this.setState(prevState => ({
          products: prevState.products.concat(product)
        }))
      }).catch(error => (
        console.log(error)
      ));
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>

        <main>
          <ProductsList products={this.state.products}/>
          <ToggleableProductForm onSubmit={this.handleSubmit}/>
        </main>
      </div>
    );
  }
}

export default Shop;
