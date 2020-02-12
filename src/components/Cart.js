import React from "react";

const Cart = ({ products }) => {
  const rows = products.map(product => {
    return (
      <tr>
        <td>{product.title}</td>
        <td>{product.order_quantity}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <table className="cart-items">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

          {rows}

          <tr>
            <td colSpan="3" className="total">
              Total: 100
            </td>
          </tr>
        </tbody>
      </table>
      <a className="button checkout">Checkout</a>
    </div>
  );
};

export default Cart;
