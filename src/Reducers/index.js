import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './Products';
import cart from './Cart';
import order from './Order';

export default combineReducers({
  routing: routerReducer,
  products,
  cart,
  order,
});