import React from 'react';
import { View } from 'react-native';
import StyleSheet from '../../../styleSheets/components/presentational/form';

export default class Form extends React.Component {

    render() {
        return <View style={StyleSheet.form}>
            {this.props.children}  
        </View>
    }
 
}