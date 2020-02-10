import React from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

const EditableProduct = ({ product }) => {
  return (
    <div class="product">
      <Product product={product}/>
      <div class="edit-form">
        <h3>Edit Product</h3>
        <ProductForm />
      </div>
    </div>
  );
};

export default EditableProduct;
