import RootComponent from '../components/root';
import Dashboard from '../components/modules/dashboard';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator({
    RootComponent: {
        getScreen: () => require("../components/root").default
    },
    Dashboard: { screen: Dashboard }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator   />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: {

    }
});

export default connect(mapStateToProps)(AppWithNavigationState);    
