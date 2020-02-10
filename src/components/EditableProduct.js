import React from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

const EditableProduct = () => {
  return (
    <div class="product">
      <Product />
      <div class="edit-form">
        <h3>Edit Product</h3>
        <ProductForm />
      </div>
    </div>
  );
};

export default EditableProduct;
