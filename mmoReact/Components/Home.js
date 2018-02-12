import React, { Component } from 'react';
import { Platform, Button, Text, View } from 'react-native';

import styles from '../styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
       
        <Button title = "Go to Details"
            onPress={()=> {
                this.props.navigation.navigate('Details', {
                    itemId: 86,
                    otherParam: 'Home Screen'
                });
            }}/>
      </View>
    );
  }
}