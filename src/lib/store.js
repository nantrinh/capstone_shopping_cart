import { createStore, combineReducers } from 'redux';

const products = (state=[], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED':
      return state.concat(action.payload.products);
    case 'PRODUCT_DELETED':
      return state.filter(product => {
        return (product.id !== action.payload.id)
      });  
    case 'PRODUCT_ADDED':
      return state.concat(action.payload.product);  
  }
  return state;
};

const rootReducer = combineReducers({
  products,
});

const store = createStore(rootReducer);

export default store;
