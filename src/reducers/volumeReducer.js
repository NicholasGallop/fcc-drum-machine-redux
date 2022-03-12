import { VOLUME } from '../actions/types';

const initialValue = 0.5;  // set value here, it will give initial state to store

const volumeReducer = (state = initialValue, action) => {
  switch(action.type) {
    case VOLUME:
      return action.payload
    default:
      return state;
  }
};
export default volumeReducer;
