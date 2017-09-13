import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native'

class Root extends React.Component {

    render() {
        
        return (<View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    'container': {
        'flex': 1,
        'backgroundColor': "#2b364b"
    }    

})

const mapStateToProps = state => ({

});

const mapDispatchToProps = props => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);   
