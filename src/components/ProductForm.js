import React, { Component } from 'react';

const ProductForm = (props) => {  
  function handleChange(e) {
    e.preventDefault();
    const property = e.target.id.split('-')[1];
    props.onChange(property, e.target.value);
  }

  return (
    <form>
      <div class="input-group">
        <label for="product-name">Product Name</label>
        <input type="text" id="product-name" value={props.name} 
          onChange={handleChange}/>
      </div>

      <div class="input-group">
        <label for="product-price">Price</label>
        <input type="text" id="product-price" value={props.price}
          onChange={handleChange}/>
      </div>

      <div class="input-group">
        <label for="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={props.quantity}
          onChange={handleChange}/>
      </div>

      <div class="actions form-actions">
        <a class="button">{props.edit ? 'Update' : 'Add'}</a>
        <a class="button">Cancel</a>
      </div>
    </form>
  );
};

export default ProductForm;
