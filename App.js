import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavContainer from './src/navigations';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import EmployeeNavigator from './src/navigations/EmployeeNavigator';

const App = () => {
  return(
    <EmployeeNavigator/>
  );
};

export default App;
