import React from 'react';
import { View } from 'react-native';
import Label from '../label';
import StyleSheet from '../../../styleSheets/components/presentational/form';

export default class FormGroup extends React.Component {

    render() {
        return <View style={StyleSheet.formGroup}>

            <Label style={StyleSheet.form_group_label}>{this.props.label}</Label>
            {this.props.children}

        </View>
    }
}