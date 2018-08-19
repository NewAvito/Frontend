'use strict'
let initialState = {
  list: [
    {category:"Without category"},
    {category:"Apartament"},
    {category:"Appliances"},
    {category:"Auto"},
    {category:"Clothes"},
    {category:"Game console"},
    {category:"Land"},
    {category:"Mobile phones"},
    {category:"Motocicle"},
    {category:"PC"},
    {category:"Work"}
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
