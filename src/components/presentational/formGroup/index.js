import React from 'react';
import { View } from 'react-native';
import StyleSheet from '../../../styleSheets/components/presentational/form';

export default class FormGroup extends React.Component {

    render() {
        return <View style={StyleSheet.formGroup}>
            {this.props.children}
        </View>
    }
}