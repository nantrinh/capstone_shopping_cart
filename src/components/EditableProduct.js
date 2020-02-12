import React from "react";
import Product from "./Product";
import EditableProductForm from "./EditableProductForm";

// add state to decide if form or buttons should be displayed
const EditableProduct = ({ product, onSubmit, onDelete }) => {
  return (
    <div className="product">
      <Product product={product} onDelete={onDelete} />
      <EditableProductForm
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        id={product.id}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default EditableProduct;
