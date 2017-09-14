import React from 'react';
import Dashboard from '../dashboard';
import { Text, View, Image } from 'react-native';
import StyleSheet from '../../../styleSheets/components/login';
import LoginForm from './loginForm';
import Intro from './intro';

export default class Login extends React.Component {

    render() {
        return <View style={StyleSheet.container}>

            <View style={StyleSheet.body}>

                <View style={StyleSheet.intro}>

                    <Intro />

                </View>

                <View style={StyleSheet.loginForm}>

                    <LoginForm /> 

                </View>

            </View>

        </View>
    }
} 