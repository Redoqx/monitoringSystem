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
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
