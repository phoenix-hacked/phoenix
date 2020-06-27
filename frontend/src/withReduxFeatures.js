import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import promise from 'redux-promise-middleware';
import {CounterReducer} from './redux/counter';
import {RandomReducer} from './redux/random';
import {ProfileReducer} from './redux/profile';
import withProvider from './withProvider';

import sagas from './sagas';

/**
 * Create root reducer, containing
 * all features of the application
 */
const rootReducer = combineReducers({
  count: CounterReducer,
  random: RandomReducer,
  profile: ProfileReducer,
});

const sagaMiddleware = createSagaMiddleware();

/**
 * Initialize Redux Dev Tools,
 * if they are installed in browser.
 */
/* eslint-disable no-underscore-dangle */
/** Use Redux compose, if browser doesn't have Redux devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

/** Create Redux store with root reducer and middleware included */
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

/**
 * Create HOC, which wraps given Component with Redux Provider
 */
export default withProvider({store, Provider});
