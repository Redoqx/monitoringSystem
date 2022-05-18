import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { launchCamera } from 'react-native-image-picker'
import Icon from "react-native-vector-icons/FontAwesome5";
import { Root, Popup } from "react-native-popup-confirm-toast";
// import { color } from "react-native-reanimated";
import color from '../config/color'

const LaporanPage = () => {
  const [lokasi, setLokasi] = useState("Masukkan Lokasi")
  const [kondisi, setKondisi] = useState("");
  const [ImageCam, setImageCam] = React.useState(null)
    const openCamera=()=>{
    
        const option = {
            mediaType : 'photo',
            quality : 1,
            includeExtra:true,
            saveToPhotos:true,
        }
        launchCamera (option,(res)=>{
            if(res.didCancel){
                console.log("Pengambilan gambar di cancel")
            }
            else if(res.errorCode){
                console.log(res.errorMessage)
            }
            else{
                const data = res.assets[0]
                setImageCam(data)
                // console.log(data)
                // console.log(data.timestamp)
            }
        })
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={{ fontSize: 18 }}>Buat Laporan</Text>
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
          <Text style={{ marginRight: 10, color:'black', alignSelf:'center' }}>Lokasi :</Text>
          <TextInput placeholder={lokasi} placeholderTextColor={'#c4c4c4'} nativeID={'Lokasi'} style={{color:"black"}}/>
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
          <Text style={{ marginBottom: 5, color:'black'}}>Kondisi :</Text>
          <Picker
            selectedValue={kondisi}
            onValueChange={(kondisiKondisi) => setKondisi(kondisiKondisi)}
            style={{color:"black",}}
          >
            <Picker.Item label="Aman" value="Aman" />
            <Picker.Item label="Tidak Aman" value="TidakAman" />
          </Picker>
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
          <Text style={{ marginRight: 10, color:'black' }}>Keterangan :</Text>
          <TextInput placeholder="Masukan Keterangan" style={{color:'black'}}/>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "column",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={openCamera}
        >
          {ImageCam===null
            ? <Icon
            name="camera"
            size={50}
            color="#C6C6C6"
            style={{ marginTop: 20 }}
          /> 
            : <Image
            source={{uri:ImageCam.uri}}
            style={{height: 150, width: '100%'}}
            />
          }
          
          {ImageCam===null
            ? <Text style={{ fontSize: 30, color: "#C6C6C6", marginBottom: 20 }}> Add Photo</Text>
            : <View></View>
            }
          {/* <Text style={{ fontSize: 30, color: "#C6C6C6", marginBottom: 20 }}>
            Add Photo
          </Text> */}
        </TouchableOpacity>

        <Root>
          <View>
            <TouchableOpacity
              onPress={() =>
                Popup.show({
                  type: "confirm",
                  title: "Dikkat!",
                  textBody:
                    "Mutlak özgürlük, kendi başına hiçbir anlam ifade etmez. ",
                  buttonText: "Tamam",
                  confirmText: "Vazgeç",
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
                backgroundColor: color.ourColor,
                paddingVertical: 14,
                marginTop: 20,
                marginHorizontal: 25,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Buat Laporan
              </Text>
            </TouchableOpacity>
          </View>
        </Root>

        {/* <TouchableOpacity
          style={{
            flexDirection: "column",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="camera"
            size={50}
            color="#C6C6C6"
            style={{ marginTop: 20 }}
          />
          <Text style={{ fontSize: 30, color: "#C6C6C6", marginBottom: 20 }}>
            Add Photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#2396F2",
            paddingVertical: 14,
            marginTop: 20,
            marginHorizontal: 25,
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Buat Laporan
          </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LaporanPage;
