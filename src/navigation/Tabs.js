import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../config/color'

import Home from "../screens/Home";
import LaporanPage from "../screens/LaporanPage";
import Profile from "../screens/Profile";
import CallP from "../screens/CallP";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarInactiveTintColor: "#BBBBBB",
        tabBarActiveTintColor: color.ourColor,
        headerShown: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color,size }) => (
            <Icon name={'home'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Laporan"
        component={LaporanPage}
        options={{
          tabBarIcon: ({ color,size }) => (
            <Icon name={'file-alt'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={Profile}
        options={{
          tabBarIcon: ({ color,size }) => (
            <Icon name={'user-alt'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={CallP}
        options={{
          tabBarIcon: ({ color,size }) => (
            <Icon name={'phone-alt'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
