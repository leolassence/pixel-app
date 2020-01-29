import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import reducers from './reducers';
import { setAuthentification } from './actionCreators';

const invariant = require('redux-immutable-state-invariant').default();

const middleware = process.env.NODE_ENV !== 'production'
  ? [invariant, thunk] : [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (localStorage.getItem('token')) store.dispatch(setAuthentification(true));

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.querySelector('#root')
);


registerServiceWorker();
