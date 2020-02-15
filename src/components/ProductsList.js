import React from "react";
import EditableProduct from "./EditableProduct";

class ProductsList extends React.Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    const allProducts = this.props.products.map(product => (
      <EditableProduct key={product.id} product={product} />
    ));

    return (
      <div className="product-listing">
        <h2>Products</h2>
        {allProducts}
      </div>
    );
  }
}

export default ProductsList;
