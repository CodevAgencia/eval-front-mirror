import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app.reducer';
import auth from './auth.reducer';
import appForm from './appForm.reducer';
import partners from './partners.reducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app,
    auth,
    appForm,
    partners,
  });
