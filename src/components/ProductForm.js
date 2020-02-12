import React from "react";

const ProductForm = props => {
  return (
    <form onSubmit={event => props.onSubmit(event)}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          name="title"
          value={props.title}
          onChange={e => props.onChange(e)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          id="product-price"
          name="price"
          value={props.price}
          onChange={e => props.onChange(e)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="text"
          id="product-quantity"
          name="quantity"
          value={props.quantity}
          onChange={e => props.onChange(e)}
        />
      </div>

      <div className="actions htmlForm-actions">
        <input
          type="submit"
          className="button"
          value={props.edit ? "Update" : "Add"}
        ></input>
        <a className="button">Cancel</a>
      </div>
    </form>
  );
};

export default ProductForm;
