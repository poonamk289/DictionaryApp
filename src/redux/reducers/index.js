// reducers/index.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer, // The 'cart' key specifies where cartReducer's state should live in the store
  // Add other reducers as needed
});

export default rootReducer;
