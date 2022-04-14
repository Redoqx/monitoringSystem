import * as React from 'react';
// import {
//     View,
// } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
function EmployeeNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={'Login'}
                    component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default EmployeeNavigator;