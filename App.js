/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator} from 'react-navigation';
import Login from './screens/Login';
import List from './screens/List';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Login },
  ListScreen: { screen: List }
});

const App = createAppContainer(AppNavigator);
/*
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
} */

export default App;

