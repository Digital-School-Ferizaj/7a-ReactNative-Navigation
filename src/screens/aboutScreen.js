import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image, Platform } from "react-native";

const SwiperComponent =
  Platform.OS === "web"
    ? require("react-native-web-swiper").default
    : require("react-native-swiper").default;

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <SwiperComponent
        style={styles.swiper}
        autoplay
        activeDotColor="blue"
        autoplayTimeout={3}
      >
        <View style={styles.slide}>
          <Image 
            source={{uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image 
            source={{uri: 'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80'}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </SwiperComponent>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  },
   button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 150,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  swiper: {
    height: 250,
    width: "100%",
    marginTop: 20,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: "100%",
    height: "100%",
  }
});

export default AboutScreen;
