import React from "react";
import EditableProduct from "./EditableProduct";

const ProductsList = ({ products, onSubmit, onDelete }) => {
  const allProducts = products.map(product => (
    <EditableProduct
      key={product.id}
      product={product}
      onSubmit={onSubmit}
      onDelete={onDelete}
    />
  ));

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {allProducts}
    </div>
  );
};

export default ProductsList;
