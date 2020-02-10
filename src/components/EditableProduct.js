import React from 'react';

const EditableProduct = () => {
  return (
    <div class="product">
      <div class="product-details">
        <h3>Apple 10.5-Inch iPad Pro</h3>
        <p class="price">$649.99</p>
        <p class="quantity">2 left in stock</p>
        <a class="delete-button"><span>X</span></a>
      </div>

      <div class="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value="Apple 10.5-Inch iPad Pro"/>
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value="649.99"/>
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value="2"/>
          </div>

          <div class="actions form-actions">
            <a class="button">Update</a>
            <a class="button">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditableProduct;