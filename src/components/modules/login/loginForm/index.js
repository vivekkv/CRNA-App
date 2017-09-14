import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Form from '../../../presentational/form';
import FormGroup from '../../../presentational/formGroup';
import StyleSheet from '../../../../styleSheets/components/login';
import CommonStyleSheet from '../../../../styleSheets/common';

export default class LoginForm extends React.Component {

    render() {
        return <View>

            <Form>

                <FormGroup>
                    <Text style={CommonStyleSheet.groupLabel}>User Name</Text>
                    <TextInput style={CommonStyleSheet.groupInput} />
                </FormGroup>

                <FormGroup>
                    <Text style={CommonStyleSheet.groupLabel}>Password</Text>
                    <TextInput style={CommonStyleSheet.groupInput}/>
                </FormGroup>

            </Form>

        </View>
    }
}