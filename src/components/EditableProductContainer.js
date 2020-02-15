import { connect } from "react-redux";
import EditableProduct from "./EditableProduct";
import client from "../lib/client";

const mapDispatchToProps = dispatch => {
  return {
    onAddToCartClick: () => {
      client
        .put(`/api/products/${this.props.product.id}`, {
          quantity: this.props.product.quantity - 1
        })
        .then(product => {
          dispatch({
            type: "PRODUCT_ADDED_TO_CART",
            payload: {
              product
            }
          });
        })
        .catch(error => console.log(error));
    }
  };
};

export default connect(null, mapDispatchToProps)(EditableProduct);
