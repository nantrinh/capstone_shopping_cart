import React from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

// add state to decide if form or buttons should be displayed
const EditableProduct = ({ product }) => {
  return (
    <div class="product">
      <Product product={product}/>
    </div>
  );
};

export default EditableProduct;
