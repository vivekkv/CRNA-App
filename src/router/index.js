import RootComponent from '../components/root';
import Dashboard from '../components/modules/dashboard';
import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose } from 'redux';
import createStore from '../redux/';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import CreateReducers from '../redux/reducers';
import ConstantBuilder from '../redux/constantBuilder';

const AppNavigator = StackNavigator({
    'Root': { screen: RootComponent },
    'Dashboard': { screen: Dashboard }
});

class App extends React.Component {
    render() {
        return (<AppNavigator />);
    }
}

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Root'));

var navReducer = (state = initialState, action) => {

    const LOGOFF = ConstantBuilder("AUTH", "LOGOFFTEST");
    let nextState = null;

    switch (action.type) {

        case LOGOFF:

            nextState = AppNavigator.router.getStateForAction(  

                NavigationActions.navigate({ routeName: 'Dashboard' }), state
            );
            break;
        default:

            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};

const appReducer = CreateReducers(navReducer)
const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);
const store = createStore(appReducer);

export default class Root extends React.Component {

    render() {
        return (<Provider store={store}>
            <AppWithNavigationState />
        </Provider>);
    }
}