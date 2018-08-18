'use strict'
let initialState = {
  list: [
    {id: 1, title: 'test item 1', description: 'some text about item 1'},
    {id: 2, title: 'test item 2', description: 'some text about item 2'},
    {id: 3, title: 'test item 3', description: 'some text about item 3'},
  ],
  category: 'all' 
};

const adsReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'CHANGE_CATEGORY': 
    state = {...state, category: action.category};
    break;
  }
  return state;
};

export default adsReducer;
