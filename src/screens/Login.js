import * as React from 'react';
import{
    StyleSheet,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import color from '../config/color';

function Login(props) {
    return (
        <SafeAreaView>
            <View name="title">
                <Text style={Styles.title}>
                    Masuk
                </Text>
            </View>
            <View name="LoginInfo">
                <View name="username">

                </View>
                <View name="password">

                </View>
                <View name="forgor">

                </View>
            </View>
            <View name="LoginButtton">

            </View>
            <View name="bawah">
                <View name="logo">

                </View>
                <View name="Accessoris">

                </View>
            </View>
        </SafeAreaView>    
    );
}

const Styles = StyleSheet.create({
    title: {
        color: color.ourColor,

    }
})

export default Login;