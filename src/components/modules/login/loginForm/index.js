import React from 'react';
import ActionBuilder from '../../../../redux/actionBuilder';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import Form from '../../../presentational/form';
import FormGroup from '../../../presentational/formGroup';
import Input from '../../../presentational/input';
import Label from '../../../presentational/label';
import StyleSheet from '../../../../styleSheets/components/login';
import CommonStyleSheet from '../../../../styleSheets/common';
import Dashboard from '../../../modules/dashboard';

export default class LoginForm extends React.Component {

    render() {

        return <View>

            <Form>

                <FormGroup>

                    <Label>First name</Label>
                    <Input onChange={this.props.onChange} value={this.props.data.get("FirstName")} name={"Firstname"}></Input>

                </FormGroup>

                <FormGroup>

                    <Label>Date of birth</Label>
                    <Input onChange={this.props.onChange} value={this.props.data.get("Dob")} name={"Dob"}></Input>

                </FormGroup>

                <FormGroup>

                    <Label>School Code</Label>
                    <Input onChange={this.props.onChange} value={this.props.data.get("SchoolCode")} name={"SchoolCode"}></Input>

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

        if(this.props.data.get("Firstname") == null) {

            Alert.alert("Please enter your firstname ");
            return false;
        }

        if(this.props.data.get("Dob") == null) {

            Alert.alert("Please enter your date of birth ");
            return false;
        }

        if(this.props.data.get("SchoolCode") == null) {

            Alert.alert("Please enter your school code ");
            return false;
        }

        this.props.dispatch(ActionBuilder("AUTH", "REGISTER"));
    }
}