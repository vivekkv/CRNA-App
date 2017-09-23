import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Form from '../../../presentational/form';
import FormGroup from '../../../presentational/formGroup';
import Input from '../../../presentational/input';
import Label from '../../../presentational/label';
import StyleSheet from '../../../../styleSheets/components/login';
import CommonStyleSheet from '../../../../styleSheets/common';

export default class LoginForm extends React.Component {

    render() {

        return <View>

            <Form>

                <FormGroup>
                    <Label>First name</Label>
                    <Input></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Date of birth</Label>
                    <Input></Input>
                </FormGroup>

                <FormGroup>
                    <Label>School Code</Label>
                    <Input></Input>
                </FormGroup>

                <FormGroup>

                    <Button
                        onPress={this.onRegister.bind(this)}
                        title="Register"
                        color="#03a9f4"
                        accessibilityLabel="Register"
                    />

                </FormGroup>

            </Form>

        </View>
    }

    onRegister() {

        this.props.navigate("Dashboard")
    }
}