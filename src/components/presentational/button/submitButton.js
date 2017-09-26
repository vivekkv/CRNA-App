import React from 'react';
import { Button } from 'react-native';
import StyleSheet from '../../../styleSheets/components/presentational/button';

export default class SubmitButton extends React.Component {

    render() {
        return <Button
            onPress = {this.props.onPress}
            title = {this.props.title}
            accessibilityLabel = {this.props.label}
            style={StyleSheet.button}
        ></Button>  
    }

}