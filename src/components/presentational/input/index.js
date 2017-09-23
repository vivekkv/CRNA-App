import React from 'react';
import { TextInput } from 'react-native';
import StyleSheet from '../../../styleSheets/common';

export default class Input extends React.Component {

    render() {
        return <TextInput style={StyleSheet.groupInput} />  
    }
}