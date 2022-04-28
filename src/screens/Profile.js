import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#000",
            height: 150,
          }}
        ></View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../images/jamet.jpg")}
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -70,
            }}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
            Tatang Suparman
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
            Security Guard
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("BantuanPage")}
        >
          <Icon name="info" size={20} style={{ width: 20, height: 20 }} />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>
            Bantuan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
            marginBottom: 40,
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("PengaturanPage")}
        >
          <Icon name="settings" size={20} style={{ width: 20, height: 20 }} />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>
            Pengaturan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff ",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            marginTop: 20,
            marginBottom: 40,
            backgroundColor: "#000 ",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 10,
              color: "red",
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
