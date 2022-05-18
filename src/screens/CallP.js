import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import call from 'react-native-phone-call';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';


function CallP() {
    const args = {
        number: '081382246046', // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
    
    const ButtonHandler =()=>{
        // call(args).catch(console.error)
        RNImmediatePhoneCall.immediatePhoneCall('088271749460');
        // console.log('aaaaa')
    }
    return (
        <View style={{backgroundColor:'black', height:'100%',}}>
            <Text>
                CallPhone func
            </Text>
            <Button title='Telepon Ridho' onPress={ButtonHandler} />
        </View>
    );
}

export default CallP;