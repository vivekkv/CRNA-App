import React from 'react';
import { Text, View, Image } from 'react-native';
import StyleSheet from '../../../../../styleSheets/components/dashboard';

export default class ApplicationInfo extends React.Component {

    render() {

        return <View style={StyleSheet.flex_item}>
            <View style={StyleSheet.flex_item}>
                <Text>Test Content</Text>
            </View>
            <View style={StyleSheet.flex_item}>
                <Text>Test Content</Text>
            </View> 
            <View style={StyleSheet.flex_item}>
                <Text>Test Content </Text>
            </View>
        </View>
    }
}    
