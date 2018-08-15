'use strict'
let initialState = {
	allInfo: null
};

const addReducer = (state=initialState, action) => {
  switch (action.type) {
		case 'ADD_INFO':
			return {
				...state,
				allInfo: action.payload
			};
			  break;
		default: 
			return state
		}
}
export default addReducer;
