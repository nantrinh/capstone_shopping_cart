import { createStore, combineReducers } from "redux";

const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return state.concat(action.payload.products);
    case "PRODUCT_DELETED":
      return state.filter(product => {
        return product.id !== action.payload.id;
      });
    case "PRODUCT_ADDED":
      return state.concat(action.payload.product);
    // case "PRODUCT_ADDED_TO_CART":
    //   return;
    default:
  }
  return state;
};

const cart = (state = [], action) => {
  switch (action.type) {
    case "PRODUCT_ADDED_TO_CART":
      let exists = false;
      let newState = state.map(product => {
        if (product.id === action.payload.product.id) {
          exists = true;
          product.quantity += 1;
        }
        return product;
      });

      if (!exists) {
        // debugger;
        const product = {
          ...action.payload.product,
          quantity: 1
        };
        newState = [...newState, product];
      }

      console.log(newState);
      return newState;
    case "PRODUCT_REMOVED_FROM_CART":
      return;
    default:
  }
  return state;
};

const rootReducer = combineReducers({
  products,
  cart
});

const store = createStore(rootReducer);

export default store;
