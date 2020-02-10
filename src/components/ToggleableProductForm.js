import React from 'react';
import ProductForm from './ProductForm';

const ToggleableProductForm = () => {
  return (
    <div class="add-form visible">
      <p><a class="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
      <ProductForm />
    </div>
  );
};

export default ToggleableProductForm;
