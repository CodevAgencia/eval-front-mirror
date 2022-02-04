import { combineReducers } from '@reduxjs/toolkit';
import dialogs from './app/dialogSlice';
import login from './app/loginSlice';
import general from './app/generalFormSlice';
import auth from '../auth/store';
import app from './app/messageSlice';
import form from './app/formStructureSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    app,
    ...asyncReducers,
    dialogs,
    login,
    general,
    form,
  });
  return combinedReducer(state, action);
};

export default createReducer;
