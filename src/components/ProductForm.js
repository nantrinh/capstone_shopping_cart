import React from 'react';

const ProductForm = (props) => {  
  function handleChange(e) {
    e.preventDefault();
    const property = e.target.name;
    props.onChange(property, e.target.value);
  }

  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" name="title" value={props.title} 
          onChange={handleChange}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input type="text" id="product-price" name="price" value={props.price}
          onChange={handleChange}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" name="quantity" value={props.quantity}
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
