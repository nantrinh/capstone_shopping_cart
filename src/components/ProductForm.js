import React from 'react';

const ProductForm = (props) => {  
  function handleChange(e) {
    e.preventDefault();
    const property = e.target.id.split('-')[1];
    props.onChange(property, e.target.value);
  }

  return (
    <form onSubmit={props.onSubmit}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" value={props.name} 
          onChange={handleChange}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input type="text" id="product-price" value={props.price}
          onChange={handleChange}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={props.quantity}
          onChange={handleChange}/>
      </div>

      <div className="actions htmlForm-actions">
        <input type="submit" className="button" 
              value={props.edit ? 'Update' : 'Add'}></input>
        <a className="button">Cancel</a>
      </div>
    </form>
  );
};

export default ProductForm;
