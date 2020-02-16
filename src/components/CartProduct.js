import React from "react";

const CartProduct = ({ product }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>$ {product.price}</td>
    </tr>
  );
};

export default CartProduct;
