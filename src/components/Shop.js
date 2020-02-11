import React, { Component } from 'react';
import Cart from './Cart';
import ProductsList from './ProductsList';
import ToggleableProductForm from './ToggleableProductForm';
import products from '../lib/products.js';
import client from '../lib/client.js';

class Shop extends Component {
  state = {
    products: [], 
  }

  componentDidMount = () => {
    client.get('/api/products')
      .then((products) => console.log(products));

    this.setState({
      products,
    }); 
  };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>

        <main>
          <ProductsList products={this.state.products}/>
          <ToggleableProductForm />
        </main>
      </div>
    );
  }
}

export default Shop;
