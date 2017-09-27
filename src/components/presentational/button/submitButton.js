import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';
import StyleSheet from '../../../styleSheets/components/presentational/button';

export default class SubmitButton extends React.Component {

    render() {
        return <TouchableOpacity
            onPress={this.props.onPress}
            style={StyleSheet.button}
        ><Text style={StyleSheet.button_text}>{this.props.title}</Text></TouchableOpacity>
    }
} 