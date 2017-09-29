import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import StyleSheet from '../../../styleSheets/components/dashboard';
import ActionBuilder from '../../../redux/actionBuilder';
import NavBar from './narbar';
import Footer from './footer';
import Content from './content';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Map } from 'immutable';

class Dashboard extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {

        return <View style={StyleSheet.container}>

            <View style={StyleSheet.schoolNameWrapper}>
                <Text style={StyleSheet.SchoolName}>{this.props.data.get("schoolName")}</Text>
            </View>

            <View style={StyleSheet.applicationStatusWrapper}>

                <Text style={StyleSheet.applicationStatusHeader}>Application Status</Text>
                <Text style={StyleSheet.applicationStatusValue}>{this.props.data.get("appStatus")}</Text>

            </View>

            <View style={StyleSheet.userInfoWrapper}>

                <Text style={StyleSheet.userInfoLabelHeader}>{this.props.data.get("name")}</Text>
                <Text style={StyleSheet.userInfoValue}>{this.props.data.get("className")}</Text>

            </View>

            <View style={StyleSheet.footer}>

                <View style={StyleSheet.footerItem}>

                </View>

                <View style={StyleSheet.footerItem}>

                    <TouchableOpacity onPress={this.props.onLogOff}><Icon name="power-off" size={30} color="#000" style={{ "justifyContent": "flex-end" }} /></TouchableOpacity>
 
                </View>

            </View>

        </View>
    }
}

const storeState = (state, ownProps) => {

    return {
        'data': Map(state.user.dashboard.get("data"))
    }
}

const storeDispatch = (dispatch, ownProps) => {
    return {
        dispatch,
        onLogOff: () => {
            
            dispatch(ActionBuilder("AUTH", "LOGOFF"));
        }
    }
};

export default connect(storeState, storeDispatch)(Dashboard);