'use strict'
let initialState = {
  query: ''
};

const searchReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'CHANGE_QUERY':
    state = {...state, query: action.query};
    break;
  }
  return state;
};

export default searchReducer;
