import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import { mySagas } from './effects';
import { createRootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export const runSagas = () => {
  sagaMiddleware.run(mySagas);
};

export const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
        logger
      )
    )
  );

  return store;
};
