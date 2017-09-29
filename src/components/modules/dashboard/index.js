import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import StyleSheet from '../../../styleSheets/components/dashboard';
import NavBar from './narbar';
import Footer from './footer';
import Content from './content';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Map } from 'immutable';

class Dashboard extends React.Component {

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

                    <Icon name="power-off" size={30} color="#fff" style={{ "justifyContent": "flex-end" }} />

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
        dispatch
    }
};

export default connect(storeState, storeDispatch)(Dashboard);