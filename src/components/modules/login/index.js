import React from 'react';
import { Map } from 'immutable';
import Dashboard from '../dashboard';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import ActionBuilder from '../../../redux/actionBuilder';
import StyleSheet from '../../../styleSheets/components/login';
import LoginForm from './loginForm';
import Intro from './intro';

class Login extends React.Component {

    static navigationOptions = {
        title: 'Register'
    };

    constructor() {
        super();
    }

    render() {

        return <View style={StyleSheet.container}>

            <View style={StyleSheet.body}>

                <View style={StyleSheet.intro}>

                    <Intro />

                </View>

                <View style={StyleSheet.loginForm}>

                    <LoginForm dispatch={this.props.dispatch} onChange={this.props.onChange} data={this.props.data} />

                </View>

            </View>

        </View>
    }

   
}

const storeState = (state, ownProps) => {

    return {

        'data': Map(state.auth.register.get("data"))
    }
    
}

const storeDispatch = (dispatch, ownProps) => {
    return {
        dispatch,
        onChange: function (name, value) {
            dispatch(ActionBuilder("AUTH", "REGISTER_ON_INPUT_CHANGE", { name, value }))
        }
    }
};

export default connect(storeState, storeDispatch)(Login)