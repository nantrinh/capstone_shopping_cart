import React from "react";
import EditableProduct from "./EditableProduct";
import store from "../lib/store";

class ProductsList {

  componentDidMount = () => {
    client
      .get("/api/products")
      .then(products => {
        store.dispatch({
          type: 'PRODUCTS_RECEIVED',
          payload: {
            products,
          }
        });
      })
      .catch(error => console.log(error));
  };

  const allProducts = [];

//  const allProducts = store.getState().products.map(product => (
//    <EditableProduct
//      key={product.id}
//      product={product}
//      onSubmit={onSubmit}
//      onDelete={onDelete}
//    />
//  ));

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {allProducts}
    </div>
  );
};

export default ProductsList;
