import React, { Component } from 'react';
import { Platform, Button, Text, View, TextInput } from 'react-native';

import styles from '../styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: "",
      isNavButtonHidden: true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TextInput style={styles.textEntry}
                  onChangeText={(text) => this.setState(
                    {text, isNavButtonHidden: text == ''})}
                  value={this.state.text}
                  placeholder='Please Enter Your Name Here' />
        {!this.state.isNavButtonHidden && 
          <Button title = "Go to Details"
              onPress={()=> {
                  this.props.navigation.navigate('Details', {
                      itemId: 86,
                      otherParam: 'Home Screen'
                  });
              }}/>}
        <Button title="Go to List"
            onPress={() => {
              this.props.navigation.navigate('List');
            }}/>
      </View>
    );
  }
}