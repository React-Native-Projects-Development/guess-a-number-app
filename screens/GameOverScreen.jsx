import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayoutDimensions = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayoutDimensions);

    return () =>
      Dimensions.removeEventListener("change", updateLayoutDimensions);
  });

  let imageContainer = {
    width: availableDeviceWidth * 0.7,
    height: availableDeviceWidth * 0.7,
    borderRadius: (availableDeviceWidth * 0.7) / 2, // here always have to be half of the width and height of the container so we have a perfect circle
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden", // any child inside of the container that go beyond the boundaries will be clipped (or cut off)
    marginVertical: availableDeviceHeight / 40,
  };

  let resultContainer = {
    marginHorizontal: 30,
    marginVertical: availableDeviceHeight / 80,
  };

  let resultText = {
    textAlign: "center",
    fontSize: availableDeviceWidth < 400 ? 14 : 20,
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={styles.title}>The Game is over!</TitleText>
        <View style={imageContainer}>
          <Image
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
            // }}
            style={styles.image}
            resizeMode="cover"
            fadeDuration={1000}
          />
        </View>
        <View style={resultContainer}>
          <BodyText style={resultText}>
            Your phone needed{" "}
            <Text Text style={styles.highlight}>
              {props.rounds}
            </Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BodyText>
        </View>
        <MainButton style={styles.mainButton} onPress={props.onRestart}>
          NEW GAME
        </MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
