import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Root, Popup } from "react-native-popup-confirm-toast";
import DatePicker from "react-native-date-picker";
import RadioForm from "react-native-simple-radio-button";

const UserInput = () => {
  //   const [date, setDate] = useState(new Date());
  //   const [open, setOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(""); //will store our current user options
  const options = [
    { label: "Laki-laki", value: "Laki" },
    { label: "Perempuan", value: "Perempuan" },
  ];

  const tipeuser = [
    { label: "Admin", value: "Admin" },
    { label: "Client", value: "Client" },
    { label: "Manager", value: "Manager" },
    { label: "Karyawan", value: "Karyawan" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20, flex: 1, paddingBottom: 0 }}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tambah Data</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginRight: 10 }}>Nama :</Text>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Masukan Nama Anda "
            placeholderTextColor={"#C6C6C6"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text>Tanggal Lahir :</Text>
          {/* <Button title="Pilih" onPress={() => setOpen(true)} /> */}
          {/* <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
        </View>

        <View
          style={{
            flexDirection: "column",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginRight: 10, paddingBottom: 10 }}>
            Jenis Kelamin :
          </Text>
          <RadioForm
            buttonColor="#C6C6C6"
            radio_props={options}
            initial={0} //initial value of this group
            onPress={(value) => {
              setChosenOption(value);
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginRight: 10 }}>Email :</Text>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Masukan Email"
            placeholderTextColor={"#C6C6C6"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginRight: 10 }}>Username :</Text>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Masukan Username"
            placeholderTextColor={"#C6C6C6"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginRight: 10 }}>Password :</Text>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Masukan Password"
            placeholderTextColor={"#C6C6C6"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginRight: 10 }}>Alamat :</Text>
          <TextInput
            style={{
              height: 100,
              flex: 1,
              marginTop: -5,
            }}
            placeholder="Masukan Alamat"
            multiline={true}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginRight: 10, paddingBottom: 10 }}>
            Tipe User :
          </Text>
          <RadioForm
            buttonColor="#C6C6C6"
            radio_props={tipeuser}
            initial={0} //initial value of this group
            onPress={(value) => {
              setChosenOption(value);
            }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: "confirm",
                title: "Konfirmasi!",
                textBody: "Apakah Anda Yakin Ingin Mengirim Laporan ? ",
                buttonText: "Iya",
                confirmText: "Tidak",
                callback: () => {
                  alert("Okey Callback && hidden");
                  Popup.hide();
                },
                cancelCallback: () => {
                  alert("Cancel Callback && hidden");
                  Popup.hide();
                },
              })
            }
            style={{
              backgroundColor: "#582841",
              paddingVertical: 14,
              marginTop: 20,
              marginHorizontal: 25,
              borderRadius: 50,
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Submit Data
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserInput;
