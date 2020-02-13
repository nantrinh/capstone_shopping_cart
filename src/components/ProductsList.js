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
    console.log(store.getState().products);

    const allProducts = store.getState().products.map(product => (
      <EditableProduct
        key={product.id}
        product={product}
        // onSubmit={onSubmit}
        // onDelete={onDelete}
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


  // handleAddSubmit = product => {
  //   client
  //     .post(`/api/products`, product)
  //     .then(product => {
  //       this.setState(prevState => ({
  //         products: prevState.products.concat(product)
  //       }));
  //     })
  //     .catch(error => console.log(error));
  // };

  // handleEditSubmit = (properties, id) => {
  //   client.put(`/api/products/${id}`, properties).then(product => {
  //     let products = this.state.products.map(prod => {
  //       if (prod.id === id) {
  //         return Object.assign({}, product);
  //       }
  //       return prod;
  //     });

  //     this.setState({ products });
  //   });
  // };