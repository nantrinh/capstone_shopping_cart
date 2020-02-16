import { connect } from "react-redux";
import ProductList from "./ProductList";
import client from "../lib/client";

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => {
      client
        .get("/api/products")
        .then(products => {
          dispatch({
            type: "PRODUCTS_RECEIVED",
            payload: {
              products
            }
          });
        })
        .catch(error => console.log(error));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
