import { Dimensions, StyleSheet, View } from "react-native";
import Strawberries from "./Strawberries";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bg} />
      <Strawberries />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: "hidden",
  },
  bg: {
    width,
    height,
    backgroundColor: "#fbc531",
  },
});
