import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import Styles from '../../styleSheets/components/root';
import ActionBuilder from '../../redux/actionBuilder';
import { setNavigation } from '../../utils/navigation';
import { getLocalStorageItem } from '../../dataStorage/asyncStorage';
import Dashboard from '../modules/dashboard';
import { AsyncStorage } from 'react-native';
import Login from '../modules/login';

class Root extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {

        if(!this.props.data.get("stateReady")) {

            return <Text>Loading</Text>
        }

        return (<View style={{ flex: 1, padding: 0, margin: 0 }}>

            {  
                this.props.data.get("isAuthorized") ?
                    <Dashboard  />
                    : <Login />
            }
   
        </View>)
    }

    componentDidMount() {

        this.props.dispatch(ActionBuilder("AUTH", "CHECK_USER_AUTHENTICAION"));
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
