import React from 'react';
import ActionBuilder from '../../../../redux/actionBuilder';
import { Text, View, TextInput, Alert, TouchableHighlight } from 'react-native';
import Form from '../../../presentational/form';
import FormGroup from '../../../presentational/formGroup';
import Input from '../../../presentational/input';
import Label from '../../../presentational/label';
import SubmitButton from '../../../presentational/button/submitButton';
import StyleSheet from '../../../../styleSheets/components/login';
import ButtonStyles from '../../../../styleSheets/components/presentational/button.js';
import CommonStyleSheet from '../../../../styleSheets/common';
import Dashboard from '../../../modules/dashboard';
import DatePicker from '../../../presentational/datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginForm extends React.Component {

    render() {

        return <View>

            {/*<Icon name="graduation-cap" size={30} color="#000" style={{ 'textAlign': "center", 'fontSize': 50 }}/> */}

            <Form>

                <FormGroup>

                    <Label>First name</Label>
                    <Input onChange={this.props.onChange} value={this.props.data.get("FirstName")} name={"Firstname"}></Input>

                </FormGroup>


                <FormGroup>

                    <Label>Last name</Label>
                    <Input onChange={this.props.onChange} value={this.props.data.get("LastName")} name={"LastName"}></Input>

                </FormGroup>

                <FormGroup>

                    <Label>Age</Label>
                    <Input onChange={this.props.onChange} value={this.props.data.get("Age")} name={"Age"}></Input>

                </FormGroup>

                <FormGroup>

                    <Label>School Code</Label>
                    <Input onChange={this.props.onChange} value={this.props.data.get("SchoolCode")} name={"SchoolCode"}></Input>

                </FormGroup>

                <FormGroup>

                    <Label>Date of birth</Label>
                    <DatePicker onChange={this.props.onChange} name="DOB" value={this.props.data.get("DOB")}></DatePicker>

                </FormGroup>


                <FormGroup>

                    <SubmitButton
                        onPress={this.onRegister.bind(this)}
                        title={<Text><Icon name="graduation-cap" size={30} color="#fff" style={{ 'textAlign': "center", 'fontSize': 20 }} /> Register</Text>}
                        accessibilityLabel="Register"
                    />

                </FormGroup>

            </Form>

        </View>
    }

    onRegister() {

        if (this.props.data.get("Firstname") == null) {

            Alert.alert("Please enter your firstname ");
            return false;
        }

        if (this.props.data.get("DOB") == null) {

            Alert.alert("Please enter your date of birth ");
            return false;
        }

        if (this.props.data.get("SchoolCode") == null) {

            Alert.alert("Please enter your school code ");
            return false;
        }

        this.props.dispatch(ActionBuilder("AUTH", "REGISTER"));
    }
}