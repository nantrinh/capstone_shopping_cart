import Product from "./Product";
import EditableProductForm from "./EditableProductForm";
import React, { Component } from "react";

class EditableProduct extends Component {
  state = {
    editing: false
  };

  handleToggleEditClick = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  handleAddToCartClick = e => {
    e.preventDefault();
    this.props.onAddToCartClick();
  };

  render() {
    const disabled = this.props.product.quantity === 0;

    return (
      <div className="product">
        <Product product={this.props.product} />
        {this.state.editing ? (
          <EditableProductForm
            title={this.props.product.title}
            price={this.props.product.price}
            quantity={this.props.product.quantity}
            id={this.props.product.id}
            onSubmit={this.handleToggleEditClick}
            onCancelClick={this.handleToggleEditClick}
          />
        ) : (
          <div className="actions product-actions">
            <a
              className={"button add-to-cart " + (disabled ? "disabled" : "")}
              onClick={e => {
                this.handleAddToCartClick(e);
              }}
            >
              Add to Cart
            </a>
            <a className="button edit" onClick={this.handleToggleEditClick}>
              Edit
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default EditableProduct;
