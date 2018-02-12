import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';

import styles from '../styles';

export default class Details extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'Details Screen',
            headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };
  
    render() {
        const { params } = this.props.navigation.state;
        const otherParam = params ? params.otherParam : null;   

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Yay! You made it to this Screen from {JSON.stringify(otherParam)} </Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}/>
            </View>
        );
    }
}