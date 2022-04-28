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

const BantuanPage = ({ navigation }) => {
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
            Bantuan
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
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
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="help-circle"
              size={25}
              style={{
                width: 30,
                height: 30,
                color: "#000",
                alignItems: "center",
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
              Monitoring System
            </Text>
          </View>
          <Text style={{ marginTop: 20, textAlign: "justify" }}>
            Monitoring System adalah aplikasi yang digunakan untuk tata kelola
            bisnis dan komunikasi antara Pt. Ridho Prima Utama dengan perusahaan
            client.
          </Text>
        </View>

        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#000",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text style={{ fontSize: 25, color: "#ffff", marginLeft: 20 }}>
            Fitur Karyawan
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
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
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="clipboard"
              size={25}
              style={{
                width: 30,
                height: 30,
                color: "#000",
                alignItems: "center",
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
              Buat Laporan
            </Text>
          </View>
          <Text style={{ marginTop: 20, textAlign: "justify" }}>
            Fitur yang berfungsi untuk pembuatan laporan harian.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
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
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="aperture"
              size={25}
              style={{
                width: 30,
                height: 30,
                color: "#000",
                alignItems: "center",
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
              Watermarked Photo
            </Text>
          </View>
          <Text style={{ marginTop: 20, textAlign: "justify" }}>
            Fitur pemotret sekaligus pemberi watermark pada foto terlampir milik
            karyawan.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
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
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="phone-call"
              size={25}
              style={{
                width: 30,
                height: 30,
                color: "#000",
                alignItems: "center",
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
              Emergency Call
            </Text>
          </View>
          <Text style={{ marginTop: 20, textAlign: "justify" }}>
            Fitur yang dapat melakukan direct call ke pihak yang di tentukan
            jika keadaan darurat.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BantuanPage;
