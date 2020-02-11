import React from 'react';
import Product from './Product';
import EditableProductForm from './EditableProductForm';

// add state to decide if form or buttons should be displayed
const EditableProduct = ({ product }) => {
  return (
    <div className="product">
      <Product product={product}/>
      <EditableProductForm />
    </div>
  );
};

export default EditableProduct;
