import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const PengaturanPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#000",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="arrow-left"
              size={25}
              style={{
                width: 30,
                height: 30,
                color: "#fff",
                marginTop: 20,
                marginBottom: 20,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("TabNavigator")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, color: "#ffff", marginLeft: 20 }}>
            Pengaturan
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginTop: 20,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Icon name="lock" size={20} color="#000" style={{ marginRight: 5 }} />
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              marginLeft: 20,
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Ganti Password
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PengaturanPage;
