'use strict'
let initialState = {
  list: [
    {id: 'all', name: 'All'},
    {id: 'personal-effect', name: 'Personal effect'},
    {id: 'hobby', name: 'Hobby'},
    {id: 'home-and-garden', name: 'Home & Garden'},
    {id: 'consumer-electronics', name: 'Consumer Electronics'}, 
    {id: 'service', name: 'Service'},
    {id: 'work', name: 'Work'},
    {id: 'realty', name: 'Realty'},
    {id: 'sporting-goods', name: 'Sporting goods'},
    {id: 'motors', name: 'Motors'},
    {id: 'animals', name: 'Animals'}, 
  ]
};

const userReducer = (state=initialState, action) => {
  switch(action.type) {
  case '': 
    break;
  }
  return state;
};

export default userReducer;
