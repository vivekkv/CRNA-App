import React from 'react';
import { TextInput } from 'react-native';
import StyleSheet from '../../../styleSheets/common';

export default class Input extends React.Component {

    constructor() {
        super();
    }

    render() {

        return <TextInput style={StyleSheet.groupInput} value={this.props.value} onChangeText={text => this.props.onChange(this.props.name, text)}  name={this.props.name} editable = {true}/>
    }
} 