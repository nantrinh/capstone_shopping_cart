import { connect } from "react-redux";
import Cart from "./Cart";

const mapStateToProps = state => {
  return {
    cartProducts: state.cart
  };
};

export default connect(mapStateToProps, null)(Cart);
