import React, { Component } from "react";
import ProductForm from "./ProductForm";
import store from "../lib/store";

class EditableProductForm extends Component {
  state = {
    title: this.props.title,
    price: this.props.price,
    quantity: this.props.quantity
  };

  handleChange = e => {
    const property = e.target.name;
    const value = e.target.value;

    this.setState({
      [property]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    store.dispatch({
      type: "PRODUCT_EDITED",
      payload: {
        product: {
          title: this.state.title,
          price: this.state.price,
          quantity: this.state.quantity,
          id: this.props.id
        }
      }
    });
    this.props.onSubmit();
  };

  render() {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>

        <ProductForm
          title={this.state.title}
          price={this.state.price}
          quantity={this.state.quantity}
          edit={true}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onCancelClick={this.props.onCancelClick}
        />
      </div>
    );
  }
}

export default EditableProductForm;
