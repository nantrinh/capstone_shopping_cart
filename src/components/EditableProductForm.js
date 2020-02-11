import React, { Component } from 'react';
import ProductForm from './ProductForm';

// add state to control the form and functions to handleChange and handleSubmit of form
// when passing props to product form, be sure to include `edit={true}`
class EditableProductForm extends Component {
  state = {
    // id: ,
    // name: ,
    // price: ,
    // quantity: ,
  }

  render() {
    return (
      <div className="edit-form">
      <h3>Edit Product</h3>
      <ProductForm />
      </div>
    );
  }
}

export default EditableProductForm;
