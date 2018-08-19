'use strict'
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import adsReducer from './adsReducer';
import categoriesReducer from './categoriesReducer';
import searchReducer from './searchReducer.js';

let reducer = combineReducers({
  user: userReducer,
  ads: adsReducer,
  categories: categoriesReducer,
  search: searchReducer
});

export default reducer;
