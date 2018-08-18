'use strict'
let initialState = {
  uid: null,
  email: null,
  loading: true
};

const userReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'USER_LOGGED': 
    state = {...state, loading: false,  uid: action.user.uid, email: action.user.email};
    break;
  case 'USER_NOT_LOGGED':
  case 'USER_LOGGED_OUT':
    state = {...state, loading: false, uid: null, email: null};
  }
  return state;
};

export default userReducer;
