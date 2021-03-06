import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextInputs =(props)=>  {
  return (
    <View>
      <View style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            elevation: 2,
          }}>
          <Icon name={props.icon} size={20} color="#848484" />
        </View>
        <TextInput
          value={props.state}
          style={{
            backgroundColor: '#FFFFFF',
            // marginHorizontal: 20,
            // borderRadius: 15,
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 15,
            elevation: 2,
            paddingLeft: 10,
            color:'black'
          }}
          placeholder={props.placeholder}
          onChangeText={text => props.set(text)}
          secureTextEntry={props.isPassword}
        />
      </View>
    </View>
  );
};

export default TextInputs;
