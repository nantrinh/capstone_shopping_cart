import React from "react";

const CartItem = ({ product }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>$ {product.price}</td>
    </tr>
  );
};

export default CartItem;
