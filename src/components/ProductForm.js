import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    name: '',
    price: '',
    quantity: '',
    edit: false,
  }

  handleChange = (e) => {
    e.preventDefault();
    const property = e.target.id.split('-')[1];
    this.setState({
      [property]: e.target.value
    })
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={this.state.name} 
            onChange={this.handleChange}/>
        </div>
  
        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={this.state.price}
            onChange={this.handleChange}/>
        </div>
  
        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={this.state.quantity}
            onChange={this.handleChange}/>
        </div>
  
        <div class="actions form-actions">
          <a class="button">{this.state.edit ? 'Update' : 'Add'}</a>
          <a class="button">Cancel</a>
        </div>
      </form>
    );
  }
};

export default ProductForm;
