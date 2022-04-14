import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome5";
import BannerSlider from "../components/BannerSlider";
import { sliderData } from "../model/data";
import { windowWidth } from "../utils/Dimensions";

const Home = () => {
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium" }}>
            Hello Tatang Suparman
          </Text>
          <ImageBackground
            source={require("../images/jamet.jpg")}
            style={{ width: 35, height: 35 }}
            imageStyle={{ borderRadius: 25 }}
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
          }}
        >
          <Icon
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium" }}>
            Laporan Terbaru
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#0aada8" }}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginTop: 20,
          }}
        >
          <Icon
            name="clipboard"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Laporan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginTop: 20,
          }}
        >
          <Icon
            name="clipboard"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Laporan
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
