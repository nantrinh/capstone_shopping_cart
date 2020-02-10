import React from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

const EditableProduct = () => {
  return (
    <div class="product">
      <Product />
      <ProductForm />
    </div>
  );
};

export default EditableProduct;
