import React from 'react';

const Product = ({ product }) => {
  return (
    <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">{product.price}</p>
      <p class="quantity">{product.quantity}</p>
      <a class="delete-button"><span>X</span></a>
    </div> 
  );
};

export default Product;
