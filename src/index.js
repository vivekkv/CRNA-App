import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux';
import Root from './components/root';

const store = createStore();

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
);