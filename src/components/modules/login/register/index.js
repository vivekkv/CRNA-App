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

            <Form>
                <FormGroup>

                    <Input placeholder="Enter name" onChange={this.props.onChange} value={this.props.data.get("FirstName")} name={"Firstname"}></Input>

                </FormGroup>

                <FormGroup>

                    <Input placeholder="Enter Application number" onChange={this.props.onChange} value={this.props.data.get("ApplicationNo")} name={"ApplicationNo"}></Input>

                </FormGroup>

                <FormGroup>

                    <Input placeholder="Enter school code" onChange={this.props.onChange} value={this.props.data.get("SchoolCode")} name={"SchoolCode"}></Input>

                </FormGroup>

                <FormGroup>

                    <DatePicker placeholder="Select date of birth" onChange={this.props.onChange} name="DOB" value={this.props.data.get("DOB")}></DatePicker>

                </FormGroup>

                <FormGroup>

                    <SubmitButton
                        onPress={this.onRegister.bind(this)} 
                        title={<Text> REGISTER WITH TALENT ERP</Text>}
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