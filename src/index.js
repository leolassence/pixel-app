import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import registerServiceWorker from './registerServiceWorker';
import rootSaga from './sagas';
import routes from './routes';
import reducers from './reducers';
import { setAuthentification } from './actions';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const invariant = require('redux-immutable-state-invariant').default();

const sagaMiddelware = createSagaMiddleware();

const middleware = process.env.NODE_ENV !== 'production'
  ? [invariant, thunk, reduxLogger, sagaMiddelware] : [thunk, sagaMiddelware];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddelware.run(rootSaga);

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

if (localStorage.getItem('token')) store.dispatch(setAuthentification(true));

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
