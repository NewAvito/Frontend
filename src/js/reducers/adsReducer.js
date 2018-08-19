'use strict'
let initialState = {
  list: [
    {id: 1, title: 'test item 1', description: 'some text about item 1'},
    {id: 2, title: 'test item 2', description: 'some text about item 2'},
    {id: 3, title: 'test item 3', description: 'some text about item 3'},
  ],
  category: 'all',
  current: null,
  page: 1,
  pages: 0
};

const adsReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'CHANGE_PAGE':
    state = {...state, page: action.page};
    break;
  case 'SET_PAGES':
    state = {...state, pages: action.pages};
    break;
  case 'CHANGE_CATEGORY': 
    state = {...state, category: action.category};
    break;
  case 'FETCH_ITEMS_SUCCESS':
    state = {...state, list: action.items};
    break;
  case 'CHANGE_CURRENT':
    state = {...state, current: action.item };
    break;
  }
  return state;
};

export default adsReducer;
