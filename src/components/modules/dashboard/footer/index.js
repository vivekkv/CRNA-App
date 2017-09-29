import React from 'react';
import { Text, View, Image } from 'react-native';
import StyleSheet from '../../../../styleSheets/components/dashboard';

export default class NavBar extends React.Component {

    render() {

        return <View style={StyleSheet.footer}>

            <Text style={{ 'textAlign': 'center', 'color': "#000", 'marginTop': 10 }}>@ TALENT ERP</Text>

        </View>
    }
}
