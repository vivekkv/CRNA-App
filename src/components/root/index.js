import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text } from 'react-native';
import Home from '../modules/home';
import Styles from '../../styleSheets/components/root';
import ActionBuilder from '../../redux/actionBuilder';

class Root extends React.Component {

    static navigationOptions = {
        title: 'TALENT ERP'
    };


    render() { 

        return (<ScrollView style={Styles.container}>

            <Home IsAuthorized={this.props.data.get("isAuthorized")} />

        </ScrollView>
        )
    }

    componentDidMount() {

        this.props.dispatch(ActionBuilder("ROOT", "PAGE_LOADED"));
    }
}

const storeState = (state, ownProps) => {

    return {
        'data': state.auth.userInfo.get("data")
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch
    }
}

export default connect(
    storeState,
    mapDispatchToProps
)(Root);   
