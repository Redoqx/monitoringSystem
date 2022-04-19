// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavContainer from './src/navigations';
// import Home from './src/screens/Home';
// import Login from './src/screens/Login';
// import EmployeeNavigator from './src/navigations/EmployeeNavigator';
// import Cam from './src/screens/Cam';

// const App = () => {
//   return(
//     // <EmployeeNavigator/>
//     <Cam />
//   );
// };

// export default App;

import React, { usestate, useEffect, useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import TextInputs from "./src/components/TextInputs";
import LoginButton from "./src/components/LoginButton";
import Forget from "./src/components/Forget";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./src/navigation/AuthStack";

import Tabs from "./src/navigation/Tabs";
import Login from "./src/screens/Login";
import Cam from "./src/screens/Cam"

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <Cam />
    </NavigationContainer>
  );
};

export default App;