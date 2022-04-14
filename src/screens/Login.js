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
    <SafeAreaView style={{backgroundColor:'white',flex:1,borderColor:'#c4c4c4',borderWidth:2}}>
            <View name="title">
                <Text style={Styles.title}>
                    Masuk
                </Text>
            </View>
            <View name="LoginInfo" style={Styles.loginContainer}>
                <View name="username">

                </View>
                <View name="password">

                </View>
                <View name="forgor">

                </View>
            </View>
            <View name="LoginButtton"style={{height:75, backgroundColor:color.ourColor, margin: 20, borderRadius: 20}}>

            </View>
            <View name="bawah" style={{flex:1,alignItems:'flex-end',flexWrap:'wrap-reverse'}}>
                <View name="logo">

                </View>
                <View name="Accessoris" style={Styles.foot}>

                </View>
            </View>
        </SafeAreaView>    
    );
}

const Styles = StyleSheet.create({
    title: {
        color: color.ourColor,
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 100,
    },
    loginContainer : {
        flex: 1,
        backgroundColor:'gray'
    },
    foot:{
        backgroundColor:color.ourColor,
        height:100,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf:'flex-start'
        
    }

})

export default Login;