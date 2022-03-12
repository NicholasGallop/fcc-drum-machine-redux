import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {}; // state set in reducers (beware types)
const middleware = [thunk];

const store = createStore( rootReducer, initialState, applyMiddleware(...middleware));

export default store;