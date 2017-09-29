import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    'container': {
        'backgroundColor': "#fafafa",
        'flex': 1,
        'padding': 0,
        'margin': 0,
        'flexWrap': 'wrap',
    },
    'content': {
        'flex': 12,
        'flexDirection': "column",
        'padding': 10
    },
    'navBar': {
        'flex': 2, 
        'backgroundColor': "#1c3aa9",
        'borderBottomWidth': 2, 
        'borderBottomColor': 'red' 
    },
    'footer': {
        'flex': 1,
        'backgroundColor': '#424242'
    },
    'application_status_bar': {
        'backgroundColor': "#c8c8c8",
        'flex': 2,
        'marginBottom': 10
    }, 
    'application_info': {
        'flex': 5,
        'marginBottom': 10,
        'backgroundColor': "#c8c8c8",
        'flexDirection': 'row'
    },
    'application_footer' : {
         'flex': 3,
        'marginBottom': 10,
        'backgroundColor': "#c8c8c8",
        'flexDirection': 'row'
    },
    'flex_item': {
        'flex': 1,
        'flexDirection': 'row'
    }
});     