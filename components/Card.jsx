import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 6,
    // shadowRadius: 0.26, // all these properties are for iOS
    backgroundColor: "white",
    elevation: 6,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
