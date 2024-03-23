import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Strawberry from "./Strawberry";

const dimensions = Dimensions.get("window");

export default function Strawberries({ strawberryCount = 100 }) {
  return (
    <View
      style={[
        styles.container,
        { width: dimensions.width, height: dimensions.height },
      ]}
    >
      {new Array(strawberryCount).fill(true).map((_, i) => (
        <Strawberry key={i} scene={dimensions} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
