import React from "react";
import CartProduct from "./CartProduct";

const calculate_total = cartProduct => {
  let total = cartProduct.reduce((acc, product) => {
    let quantity = parseInt(product.quantity, 10);
    let price = parseFloat(product.price, 10);
    return (acc += quantity * price);
  }, 0);

  return total.toFixed(2);
};

const Cart = ({ cartProducts }) => {
  console.log(cartProducts);
  const rows = cartProducts.map(product => {
    return <CartProduct key={product.id} product={product} />;
  });

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <table className="cart-products">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {rows}
          <tr>
            <td colSpan="3" className="total">
              Total: $ {calculate_total(cartProducts)}
            </td>
          </tr>
        </tbody>
      </table>
      <a className="button checkout">Checkout</a>
    </div>
  );
};

export default Cart;
