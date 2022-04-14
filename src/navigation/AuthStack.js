import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Tabs} name="TabNavigator" />
    </Stack.Navigator>
  );
};

export default AuthStack;
