import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Tabs from "./Tabs";
import BantuanPage from "../screens/BantuanPage";
import Profile from "../screens/Profile";
import PengaturanPage from "../screens/PengaturanPage";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Tabs}
        name="TabNavigator"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BantuanPage}
        name="BantuanPage"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Home}
        name="Home"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={PengaturanPage}
        name="PengaturanPage"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
