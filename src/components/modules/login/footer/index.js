import React from 'react';
import { Text, View, Image } from 'react-native';
import StyleSheet from '../../../../styleSheets/components/login';

export default class NavBar extends React.Component {

    render() {

        return <View style={StyleSheet.footer}>

            <Text style={{ 'textAlign': 'right', 'color': "#fff", 'marginTop': 10 }}>@ TALENT ERP</Text>

        </View>
    }
}
