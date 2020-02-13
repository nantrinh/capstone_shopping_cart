import { createStore, combineReducers } from 'redux';

const products = (state=[], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED':
      return state.concat(action.payload.products);
    case 'DELETE_PRODUCT': 
      return action.payload.products;  
  }
  return state;
};

const rootReducer = combineReducers({
  products,
});

const store = createStore(rootReducer);

export default store;
