import React from 'react';
import Dashboard from '../dashboard';
import Login from '../login';

export default class Home extends React.Component {

    render() {

        return <Login {...this.props}/>
    }
}