import { DISPLAY } from '../actions/types';

const initialValue = '';  // set value here, it will give initial state to store

const displayReducer = (state = initialValue, action) => {
  switch(action.type) {
    case DISPLAY:
    //  console.log('frm volred vol:',state.volume,'frm volred state:',state)
   //   state is only the value of property being altered
      return action.payload
    default:
      return state;
  }
};
export default displayReducer;