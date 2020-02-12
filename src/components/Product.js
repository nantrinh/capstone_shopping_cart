import React from "react";

const Product = ({ product, onDelete }) => {
  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">{product.price}</p>
      <p className="quantity">{product.quantity}</p>
      <a
        className="delete-button"
        onClick={() => {
          onDelete(product.id);
        }}
      >
        <span>X</span>
      </a>
    </div>
  );
};

export default Product;
