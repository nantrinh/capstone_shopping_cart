import React, { Component } from "react";
import store from "../lib/store";
import CartItem from "./CartItem";

class Cart extends Component {
  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  calculate_total = () => {
    let total = store.getState().cart.reduce((acc, product) => {
      return (acc +=
        parseInt(product.quantity, 10) * parseFloat(product.price, 10));
    }, 0);

    return total.toFixed(2);
  };

  render() {
    const rows = store.getState().cart.map(product => {
      return <CartItem key={product.id} product={product} />;
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
                Total: $ {this.calculate_total()}
              </td>
            </tr>
          </tbody>
        </table>
        <a className="button checkout">Checkout</a>
      </div>
    );
  }
}

export default Cart;
