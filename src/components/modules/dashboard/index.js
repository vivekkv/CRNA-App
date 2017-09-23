import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import StyleSheet from '../../../styleSheets/components/login';

class Dashboard extends React.Component {

    static navigationOptions = {
        title: 'Dashboard'
    };

    constructor(){
        super();
    }  

    render() {
 
        return <View style={StyleSheet.container}>
                <Text>Dashboard</Text>
        </View>
    }
} 
  
export default connect()(Dashboard)
  