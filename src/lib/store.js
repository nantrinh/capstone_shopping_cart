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
    case "PRODUCT_ADDED_TO_CART":
      return state.map(product => {
        if (product.id === action.payload.product.id) {
          let newproduct = { ...product };
          newproduct.quantity = product.quantity - 1;
          return newproduct;
          //return { ...action.payload.product };
        }
        return product;
      });
    case "PRODUCT_EDITED":
      return state.map(product => {
        if (product.id === action.payload.product.id) {
          return action.payload.product;
        }
        return product;
      });
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
        const product = {
          ...action.payload.product,
          quantity: 1
        };
        newState = [...newState, product];
      }
      return newState;
    case "PRODUCT_EDITED":
      return state.map(product => {
        if (product.id === action.payload.product.id) {
          return {
            ...product,
            title: action.payload.product.title,
            price: action.payload.product.price
          };
        }
        return product;
      });
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
