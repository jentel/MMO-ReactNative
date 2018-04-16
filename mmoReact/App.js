import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Components/Home';
import Details from './Components/Details';
import InfoList from './Components/InfoList';
import LaunchLibraryList from './Components/LaunchLibraryList';

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
      screen: Home
    },
    Details: {
      screen: Details
    },
    List: {
      screen: InfoList
    },
    LaunchLibrary: {
      screen: LaunchLibraryList
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3333ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);