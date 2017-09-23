import React from 'react';
import { Text } from 'react-native';
import StyleSheet from '../../../styleSheets/common';

export default class Label extends React.Component {

    render() {
        return <Text style={StyleSheet.groupLabel}>{this.props.children}</Text>
    }
}