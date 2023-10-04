import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import rootReducer from './reducers';
import fetchReducer from './reducers/fetchReducer';

const store = createStore(fetchReducer, applyMiddleware(thunkMiddleware));

export default store;