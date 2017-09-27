import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import StyleSheet from '../../../styleSheets/common';
import moment from 'moment';

export default class MyDatePicker extends Component {

    constructor(props) {
        super(props)
        //this.state = { date: "2016-05-15" }
    }

    render() {

        const onDateChange = (formatedDate, fullDate) => {

            this.props.onChange(this.props.name, moment(fullDate));
        }

        return (
            <DatePicker
                mode="date"
                date={this.props.value ? this.props.value.format("YYYY-MM-DD ") : null}
                placeholder={this.props.placeholder}
                format="YYYY-MM-DD"
                onDateChange={onDateChange}
                style={StyleSheet.groupDatePicker}
                //minDate="2016-05-01"
                //maxDate="2016-06-01"
                //confirmBtnText="Confirm"
                //cancelBtnText="Cancel"
                //date=this.state.date
            />
        )
    }
}

// customStyles={{
//       dateIcon: {
//         position: 'absolute',
//         left: 0,
//         top: 4,
//         marginLeft: 0
//       },
//       dateInput: {
//         marginLeft: 36
//       }
//       // ... You can check the source to find the other keys. 
//     }}