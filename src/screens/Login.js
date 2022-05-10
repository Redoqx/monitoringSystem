import React, { usestate, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import TextInputs from "../components/TextInputs";
import Forget from "../components/Forget";
import Home from "./Home";
import Tabs from "../navigation/Tabs";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dbe4f3" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <Image
          source={require("../images/RPU.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          PT RIDHO PRIMA<Text style={{ color: "#FF0000" }}> UTAMA</Text>
        </Text>
        <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
          Masuk
        </Text>
      </View>

      <TextInputs
        state={email}
        set={setEmail}
        icon="envelope"
        placeholder="Masukan Email"
        placeholderTextColor={"#C6C6C6"}
        isPassword={false}
      />

      <TextInputs
        state={password}
        set={Setpassword}
        icon="lock"
        placeholder="Masukan Password"
        placeholderTextColor={"#C6C6C6"}
        isPassword={true}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#582841",
          paddingVertical: 14,
          marginTop: 20,
          marginHorizontal: 25,
          borderRadius: 50,
          elevation: 2,
        }}
        onPress={() => navigation.navigate("TabNavigator")}
      >
        <Text
          style={{ color: "#FFFFFF", textAlign: "center", fontWeight: "bold" }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <Forget forgotPasswordText="Lupa Password?" />
    </SafeAreaView>
  );
};

export default Login;
