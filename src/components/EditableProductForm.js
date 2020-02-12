import React, { Component } from "react";
import ProductForm from "./ProductForm";

class EditableProductForm extends Component {
  state = {
    title: this.props.title,
    price: this.props.price,
    quantity: this.props.quantity
  };

  handleChange = (property, value) => {
    this.setState({
      [property]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      {
        title: this.state.title,
        price: this.state.price,
        quantity: this.state.quantity
      },
      this.props.id
    );
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
