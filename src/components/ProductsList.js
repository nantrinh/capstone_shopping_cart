import React, { Component } from "react";
import EditableProduct from "./EditableProduct";
import store from "../lib/store";
import client from "../lib/client";

class ProductsList extends Component {

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => { this.forceUpdate() } );

    client.get('/api/products').then(products => {
      store.dispatch({
        type: 'PRODUCTS_RECEIVED',
        payload: {
          products,
        },
      })
    }).catch(error => console.log(error));
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    const allProducts = store.getState().products.map(product => (
      <EditableProduct
        key={product.id}
        product={product}
      />
    ));

return (
  <div className="product-listing">
    <h2>Products</h2>
    {allProducts}
  </div>
);

  }
};

export default ProductsList;