import React from 'react';
import ActionBuilder from '../../../../redux/actionBuilder';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import Form from '../../../presentational/form';
import FormGroup from '../../../presentational/formGroup';
import Input from '../../../presentational/input';
import Label from '../../../presentational/label';
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

                <FormGroup label="Name">

                    <Input placeholder="Enter name" onChange={this.props.onChange} value={this.props.data.get("FirstName")} name={"Firstname"}></Input>

                </FormGroup>

                <FormGroup label="Application Number">

                    <Input placeholder="Enter Application number" onChange={this.props.onChange} value={this.props.data.get("ApplicationNo")} name={"ApplicationNo"}></Input>

                </FormGroup>

                <FormGroup label="School Code">

                    <Input placeholder="Enter school code" onChange={this.props.onChange} value={this.props.data.get("SchoolCode")} name={"SchoolCode"}></Input>

                </FormGroup>

                <FormGroup label="Date Of Birth">

                    <DatePicker placeholder="Select date of birth" onChange={this.props.onChange} name="DOB" value={this.props.data.get("DOB")}></DatePicker>

                </FormGroup>


            </Form>



        </View>
    }

    
}