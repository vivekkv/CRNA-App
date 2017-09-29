import React from 'react';
import { Map } from 'immutable';
import Dashboard from '../dashboard';
import { Text, View, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import ActionBuilder from '../../../redux/actionBuilder';
import StyleSheet from '../../../styleSheets/components/login';
import RegisterButton from '../../presentational/button/registerButton';
import Register from './register';
import Footer from './footer';
import NavBar from './navBar';
import Header from './header';
import Intro from './intro';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
    }

    render() {

        return <View style={StyleSheet.container}>

            <Header />

            <View style={StyleSheet.loginForm}>

                <Register dispatch={this.props.dispatch} onChange={this.props.onChange} data={this.props.data} />

            </View>

            <Footer>

                <RegisterButton
                    onPress={this.onRegister.bind(this)}
                    title={<Text> REGISTER WITH TALENT ERP</Text>}
                    accessibilityLabel="Register"
                />

            </Footer>

        </View>
    }

    onRegister() {

        if (this.props.data.get("Firstname") == null) {

            Alert.alert("Please enter your firstname ");
            return false;
        }

        if (this.props.data.get("DOB") == null) {

            Alert.alert("Please enter your date of birth ");
            return false;
        }

        if (this.props.data.get("SchoolCode") == null) {

            Alert.alert("Please enter your school code ");
            return false;
        }

        this.props.dispatch(ActionBuilder("AUTH", "REGISTER", { navigate: this.props.navigation.navigate }));
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

export default connect(storeState, storeDispatch)(Login);