import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import Home from '../modules/home';
import Styles from '../../styleSheets/components/root';

class Root extends React.Component {

    render() {
        return (<View style={Styles.container}>

            <Home IsAuthorized={false} />

        </View>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = props => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);   
