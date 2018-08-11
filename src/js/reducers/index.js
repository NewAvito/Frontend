'use strict'
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import uiReducer from './uiReducer';

let reducer = combineReducers({
  user: userReducer,
  ui: uiReducer
});

export default reducer;
