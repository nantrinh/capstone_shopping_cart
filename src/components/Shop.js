import React, { Component } from 'react';
import Cart from './Cart';
import ProductsList from './ProductsList';
import ToggleableProductForm from './ToggleableProductForm';
import products from '../lib/products.js';

class Shop extends Component {
  state = {
    products: [], 
  }

  componentDidMount = () => {
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
