import Product from "./Product";
import EditableProductForm from "./EditableProductForm";
import React, { Component } from "react";

// add state to decide if form or buttons should be displayed

class EditableProduct extends Component {
  state = {
    editing: false
  };

  handleToggleEditClick = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  handleAddToCartClick = e => {};

  render() {
    return (
      <div className="product">
        <Product product={this.props.product} onDelete={this.props.onDelete} />
        {this.state.editing ? (
          <EditableProductForm
            title={this.props.product.title}
            price={this.props.product.price}
            quantity={this.props.product.quantity}
            id={this.props.product.id}
            onSubmit={this.props.onSubmit}
            onCancelClick={this.handleToggleEditClick}
          />
        ) : (
          <div class="actions product-actions">
            <a
              class="button add-to-cart"
              onClick={() => {
                this.props.onAddToCartClick(this.props.product.id);
              }}
            >
              Add to Cart
            </a>
            <a class="button edit" onClick={this.handleToggleEditClick}>
              Edit
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default EditableProduct;
