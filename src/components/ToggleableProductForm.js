import React, { Component } from 'react';
import ProductForm from './ProductForm';

class ToggleableProductForm extends Component {
  state = {
    name: '',
    price: '',
    quantity: '',
  }
    
  handleChange = (property, value) => {
    this.setState({
      [property]: value
    })
    console.log(this.state);
  }
      
  render() {
    return (
      <div class="add-form visible">
        <p><a class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <ProductForm 
          name={this.state.name}
          price={this.state.price}
          quantity={this.state.quantity}
          edit={false}
          onSubmit={this.props.onSubmit} 
          onChange={this.handleChange} />
      </div>
    );
  }
}  

export default ToggleableProductForm;
