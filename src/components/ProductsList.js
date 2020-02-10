import React from 'react';
import EditableProduct from './EditableProduct';

const ProductsList = ({ products }) => {
  const allProducts = products.map(product => {
    <EditableProduct key={product.id} product={product} />
  });

  return (
      <div class="product-listing">
        <h2>Products</h2>
        {allProducts}
      </div>
  );
};

export default ProductsList;
