import React, { Component } from "react";
import EditableProductContainer from "./EditableProductContainer";

class ProductList extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    const allProducts = this.props.products.map(product => (
      <EditableProductContainer key={product.id} product={product} />
    ));

    return (
      <div className="product-listing">
        <h2>Products</h2>
        {allProducts}
      </div>
    );
  }
}

export default ProductList;
