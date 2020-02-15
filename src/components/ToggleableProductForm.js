import React, { Component } from "react";
import ProductForm from "./ProductForm";
import client from "../lib/client";
import store from "../lib/store";

class ToggleableProductForm extends Component {
  state = {
    title: "",
    price: "",
    quantity: "",
    formVisible: false
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
          type: "PRODUCT_ADDED",
          payload: {
            product
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
    this.setState(prevState => ({ formVisible: !prevState.formVisible }));
  };

  render() {
    return (
      <div>
        <div className={"add-form" + (this.state.formVisible ? "visible": "")}>
          <div>
            <h3>Add A Product</h3>
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
      </div>
      <div className={this.state.formVisible ? "hide" : ""}>
          <p>
            <a
              className="button add-product-button"
              onClick={this.handleToggleVisibleForm}
            >
              Add A Product
            </a>
          </p>
      </div>
    </div>
    );
  }
}

export default ToggleableProductForm;
