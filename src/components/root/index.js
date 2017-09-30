import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import Home from '../modules/home';
import Styles from '../../styleSheets/components/root';
import ActionBuilder from '../../redux/actionBuilder';
import { setNavigation } from '../../utils/navigation';
import { getLocalStorageItem } from '../../dataStorage/asyncStorage';

class Root extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (<View style={{ flex: 1, padding: 0, margin: 0 }}>

            <Home IsAuthorized={this.props.data.get("isAuthorized")} {...this.props} />

        </View>)
    }
}

const storeState = (state, ownProps) => {

    return {
        'data': state.root.get("data")
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
