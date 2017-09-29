import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    'container': {
        'flex': 1,
        'backgroundColor': "#fff"
    },
    'content': {
        'flex': 12,
        'flexDirection': "column"
    },
    'navBar': {
        'flex': 1,
        'backgroundColor': "#fff",
    }, 
    'schoolNameWrapper': {
        'flex': 2,
        "justifyContent": "center",
        "flexDirection": "row",
        "backgroundColor": "#1c3aa9",
        'borderBottomWidth': 2,
        'borderBottomColor': "red"
    },
    'SchoolName': {
        'flex': 1,
        "justifyContent": "center",
        "flexDirection": "row",
        "textAlign": "center",
        "fontWeight": "bold",
        "fontSize": 22,
        "marginTop": 50,
        "color": "#fff"
    },
    "applicationStatusWrapper": {
        'flex': 3,
        "justifyContent": "center",
        "flexDirection": "column",
        "backgroundColor": "#fff",
        'margin': 5,
        "borderRadius": 5
    },
    "applicationStatusHeader": {
        "fontSize": 25,
        "textAlign": "center",
        "color": "#000"
    },
    "applicationStatusValue": {
        "fontSize": 18,
        "textAlign": "center",
        "color": "#000"
    },
    "userInfoWrapper": {
        'flex': 5,
        "justifyContent": "center",
        "backgroundColor": "#fff",
        "flexDirection": "column",
        'margin': 5,
        "borderRadius": 5
    },
    "userInfoLabelHeader": {
        "fontSize": 25,
        "textAlign": "center",
        "color": "#000"
    },
    "userInfoValue": {
        "fontSize": 18,
        "textAlign": "center",
        "color": "#000"
    },
    "footer": {
        'marginTop': 5,
        'flex': 1,
        "justifyContent": "center",
        "flexDirection": "column", 
        "backgroundColor": "#fff", 
        "flexDirection": "row"
    },
    "footerItem": {
        "flex": 3,
        "margin": 10,
        "flexDirection": "row",
        "justifyContent": "flex-end"
    }
}); 