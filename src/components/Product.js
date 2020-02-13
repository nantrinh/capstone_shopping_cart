import React, { Component } from "react";
import store from '../lib/store';
import client from '../lib/client';

class Product extends Component {
    // should deleting object also delete from cart??
    handleDeleteClick = id => {
      client.delete(`/api/products/${id}`).then(() => {
        const products = store.getState().products.filter(product => {
          return product.id !== id;
        });
  
        store.dispatch({
          type: 'DELETE_PRODUCT',
          payload: {
            products,
          }
        });
      });
    };

 render() {
    return (
      <div className="product-details">
        <h3>{this.props.product.title}</h3>
        <p className="price">{this.props.product.price}</p>
        <p className="quantity">{this.props.product.quantity}</p>
        <a
          className="delete-button"
          onClick={() => {
            this.handleDeleteClick(this.props.product.id);
          }}
        >
          <span>X</span>
        </a>
      </div>
    );
  }
};

export default Product;
