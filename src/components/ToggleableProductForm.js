import React, { Component } from "react";
import ProductForm from "./ProductForm";

class ToggleableProductForm extends Component {
  state = {
    title: "",
    price: "",
    quantity: ""
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
    this.props.onSubmit({
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity
    });

    this.setState({
      title: "",
      price: "",
      quantity: ""
    });
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
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ToggleableProductForm;
