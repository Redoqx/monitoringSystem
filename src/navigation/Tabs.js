import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import Home from "../screens/Home";
import LaporanPage from "../screens/LaporanPage";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignitems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              {/* <Image
                source={require("/monitoring/assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              /> */}
              <Text
                stye={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Laporan"
        component={LaporanPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignitems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              {/* <Image
                source={require("/monitoring/assets/icons/clipboard.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              /> */}
              <Text
                stye={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Laporan
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignitems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              {/* <Image
                source={require("/monitoring/assets/icons/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              /> */}
              <Text
                stye={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Profile
              </Text>
            </View>
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
