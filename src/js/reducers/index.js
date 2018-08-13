'use strict'
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import adsReducer from './adsReducer';
import categoriesReducer from './categoriesReducer';

let reducer = combineReducers({
  user: userReducer,
  ads: adsReducer,
  categories: categoriesReducer
});

export default reducer;
