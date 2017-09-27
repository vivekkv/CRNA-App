import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import StyleSheet from '../../../styleSheets/components/dashboard';
import NavBar from './narbar';
import Footer from './footer';
import Content from './content';

class Dashboard extends React.Component {

    constructor() {
        super();
    }

    render() {

        return <View style={StyleSheet.container}>

            <NavBar />

            <Content />

            <Footer />

        </View>
    }
}

export default connect()(Dashboard)
