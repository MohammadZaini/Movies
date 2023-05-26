import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import countReducer from '../reducers/countReducer';

const rootReducer = combineReducers(
{ count: countReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;