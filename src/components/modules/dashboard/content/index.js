import React from 'react';
import { Text, View, Image } from 'react-native';
import StyleSheet from '../../../../styleSheets/components/dashboard';
import ApplicationStatusBar from './applicationStatusBar';
import ApplicationInfo from './applicationInfo';

export default class Content extends React.Component {

    render() {

        return <View style={StyleSheet.content}>

            <View style={StyleSheet.application_status_bar}>

                <ApplicationStatusBar />

            </View>

            <View style={StyleSheet.application_info}>

                <ApplicationInfo />

            </View>

            
            <View style={StyleSheet.application_footer}>

                <ApplicationInfo />

            </View>

        </View>
    }
}    
