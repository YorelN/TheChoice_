import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';
import HelloAction from '../actions/HelloAction'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.value}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop : 15,
        shadowOffset:{  width: 0,  height: 0.5,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        height : 60

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    }
});