import React, { Component } from "react";
import ProductForm from "./ProductForm";
import client from '../lib/client';
import store from '../lib/store';

class ToggleableProductForm extends Component {
  state = {
    title: "",
    price: "",
    quantity: "",
    visible: false
  };

  handleAddSubmit = event => {
    event.preventDefault();
    const product = {
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity
    };
    
    client
      .post(`/api/products`, product)
      .then(product => {
        store.dispatch({
          type: 'ADD_PRODUCT',
          payload: {
            product,
          }
        });

        this.setState({
          title: "",
          price: "",
          quantity: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    const property = e.target.name;
    const value = e.target.value;

    this.setState({
      [property]: value
    });
  };

  handleToggleVisibleForm = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className="add-form visible">
        <p>
          <a className="button add-product-button">Add A Product</a>
        </p>
        <h3>Add Product</h3>
        <ProductForm
          title={this.state.title}
          price={this.state.price}
          quantity={this.state.quantity}
          edit={false}
          onSubmit={this.handleAddSubmit}
          onChange={this.handleChange}
          onCancelClick={this.handleToggleVisibleForm}
        />
      </div>
    );
  }
}

export default ToggleableProductForm;
