import { combineReducers } from '@reduxjs/toolkit';
import dialogs from './app/dialogSlice';
import products from './app/productsSlice';
import login from './app/loginSlice';
import alert from './app/alertSlice';
import user from './app/userSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    ...asyncReducers,
    dialogs,
    products,
    login,
    alert,
    user,
  });
  return combinedReducer(state, action);
};

export default createReducer;
