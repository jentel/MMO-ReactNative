import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Components/Home';
import Details from './Components/Details';

export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);