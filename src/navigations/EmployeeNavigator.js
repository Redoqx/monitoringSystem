import * as React from 'react';
import {
    View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
function EmployeeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen>
                name={'Login'}
                component={Login}
                option={{headerShown: false}}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default EmployeeNavigator;