import { combineReducers } from 'redux';
import powerReducer from './powerReducer';
import volumeReducer from './volumeReducer';
import displayReducer from './displayReducer';


const rootReducer = combineReducers({
  power: powerReducer,
  volume: volumeReducer,
  display: displayReducer
});
export default rootReducer