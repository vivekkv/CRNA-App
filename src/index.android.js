import RootComponent from './components/root';
import Dashboard from './components/modules/dashboard';
import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose } from 'redux';
import createStore from './redux/';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import CreateReducers from './redux/reducers';
import ConstantBuilder from './redux/constantBuilder';
import { getLocalStorageItem } from './dataStorage/asyncStorage';

const AppNavigator = StackNavigator({
  'Main': { screen: RootComponent },
  'Dashboard': { screen: Dashboard }
});

class App extends React.Component {

  render() {

    return (<AppNavigator />);

  }
}

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

const navReducer = (state = initialState, action) => {

  let nextState = null;

  switch (action.type) {

    default:

      nextState = AppNavigator.router.getStateForAction(action, state);

      break;
  }

  return nextState || state;
};

const appReducer = CreateReducers(navReducer);
const store = createStore(appReducer);

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends React.Component {

  render() {

    return (<Provider store={store}>
      <AppWithNavigationState />
    </Provider>);
  }
}