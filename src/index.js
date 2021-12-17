// @ts-check

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.js';
import store from './slices/index.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
