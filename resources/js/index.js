import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watcher from './store/saga';
import state from './store/reducers';
import App from './App';
require('./bootstrap');

const saga = createSagaMiddleware();

const store = createStore(
  state,
  compose(
    applyMiddleware(
      saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(watcher);

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

if (document.getElementById('root')) {
  render(Root, document.getElementById('root'));
}
