import React from 'react';
import Dashboard from '../dashboard';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
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

        const { navigate } = this.props.navigation;

        return <View style={StyleSheet.container}>

            <View style={StyleSheet.body}>

                <View style={StyleSheet.intro}>

                    <Intro />

                </View>

                <View style={StyleSheet.loginForm}>

                    <LoginForm navigate={navigate} />

                </View>

            </View>

        </View>
    }
}

export default connect()(Login)
