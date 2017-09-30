import React from 'react';
import Dashboard from '../dashboard';
import Login from '../login';

export default class Home extends React.Component {

    render() {

        if (this.props.IsAuthorized) {

            return <Dashboard {...this.props} />
        }

        return <Dashboard {...this.props} />
    }
}