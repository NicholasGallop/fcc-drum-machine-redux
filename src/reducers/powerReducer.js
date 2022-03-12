import { POWER } from '../actions/types';

const initialValue = true;  // set value here, it will give initial state to store

const powerReducer = (state = initialValue, action) => {
  switch(action.type) {
    case POWER:
   //   console.log('frm pwr reducer state:', state)
   //   state.power=action.payload
   //   console.log('frm pwrred pwr2:',state.power,'frm pwrred state2:',state)
      return action.payload ;
    default:
      return state;
    }
  };

export default powerReducer