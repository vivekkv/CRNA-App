import React from 'react';
import { Map } from 'immutable';
import Dashboard from '../dashboard';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import ActionBuilder from '../../../redux/actionBuilder';
import StyleSheet from '../../../styleSheets/components/login';
import Register from './register';
import Footer from './footer';
import NavBar from './navBar';
import Header from './header';
import Intro from './intro';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends React.Component {

    static navigationOptions = {
        'title': 'Re',
        'headerStyle': {
            'backgroundColor': 'blue'
        }
    };

    constructor() {
        super();
    }

    render() {

        return <View style={StyleSheet.container}>

            <NavBar />

            <Header />
 
            <Icon name="graduation-cap" size={30} color="#1c3aa9" style={{ 'textAlign': "center", 'fontSize': 50, 'marginTop': 30 }} />
 
            <View style={StyleSheet.loginForm}> 
 
                <Register dispatch={this.props.dispatch} onChange={this.props.onChange} data={this.props.data} />

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

            console.log("er")

            dispatch(ActionBuilder("AUTH", "REGISTER_ON_INPUT_CHANGE", { name, value }))
        }
    }
};

export default connect(storeState, storeDispatch)(Login);