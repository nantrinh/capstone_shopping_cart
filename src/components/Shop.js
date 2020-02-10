import React, { Component } from 'react';
import Cart from './Cart';

class Shop extends Component {
  render() {
    return (
  <div id="app">
    <header>
      <h1>The Shop!</h1>
      <Cart />
    </header>

    <main>
      <div class="product-listing">
        <h2>Products</h2>
        <div class="product">
          <div class="product-details">
            <h3>Amazon Kindle E-reader</h3>
            <p class="price">$79.99</p>
            <p class="quantity">5 left in stock</p>
            <div class="actions product-actions">
              <a class="button add-to-cart">Add to Cart</a>
              <a class="button edit">Edit</a>
            </div>
            <a class="delete-button"><span>X</span></a>
          </div>
        </div>

        <div class="product">
          <div class="product-details">
            <h3>Apple 10.5-Inch iPad Pro</h3>
            <p class="price">$649.99</p>
            <p class="quantity">2 left in stock</p>
            <a class="delete-button"><span>X</span></a>
          </div>

          <div class="edit-form">
            <h3>Edit Product</h3>
            <form>
              <div class="input-group">
                <label for="product-name">Product Name</label>
                <input type="text" id="product-name" value="Apple 10.5-Inch iPad Pro"/>
              </div>

              <div class="input-group">
                <label for="product-price">Price</label>
                <input type="text" id="product-price" value="649.99"/>
              </div>

              <div class="input-group">
                <label for="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value="2"/>
              </div>

              <div class="actions form-actions">
                <a class="button">Update</a>
                <a class="button">Cancel</a>
              </div>
            </form>
          </div>
        </div>

        <div class="product">
          <div class="product-details">
            <h3>Yamaha Portable Keyboard</h3>
            <p class="price">$155.99</p>
            <p class="quantity none-left">0 left in stock</p>
            <div class="actions product-actions">
              <a class="button add-to-cart disabled">Add to Cart</a>
              <a class="button edit">Edit</a>
            </div>
            <a class="delete-button"><span>X</span></a>
          </div>
        </div>
      </div>

      <div class="add-form">
        <p><a class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value=""/>
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value=""/>
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value=""/>
          </div>

          <div class="actions form-actions">
            <a class="button">Add</a>
            <a class="button">Cancel</a>
          </div>
        </form>
      </div>
    </main>
  </div>    );
  }
}

export default Shop;
