import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LogInScreen from '../screens/LogInScreen'

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'SignIn' : 'Main');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View >
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  SignIn:LogInScreen,
  Main:MainTabNavigator,
  AuthLoading:AuthLoadingScreen,
  },
  {
  initialRouteName: 'AuthLoading',
  },
);

