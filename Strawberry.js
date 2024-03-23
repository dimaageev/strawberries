import React, { useRef, useEffect, useState } from "react";
import { Animated, StyleSheet, Easing } from "react-native";

const START_Y_POSITION = -50;
const STRAWBERRY_TYPES = ["🍓", "🍓", "🍓"]; // can change later

export default function Strawberry({ scene }) {
  const [config, setConfig] = useState(() => getConfig());
  const animatedY = useRef(new Animated.Value(START_Y_POSITION)).current;

  const runAnimation = () => {
    Animated.sequence([
      Animated.delay(config.fallDelay),
      Animated.timing(animatedY, {
        toValue: scene.height,
        duration: config.fallDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newConfig = getConfig();
      setConfig(newConfig);
    });
  };

  useEffect(() => {
    if (config) {
      runAnimation();
    }
  }, [config]);

  return (
    <Animated.Text
      style={[
        styles.strawberry,
        {
          left: config.xPosition,
          fontSize: config.size,
          opacity: config.opacity,
          transform: [{ translateY: animatedY }],
        },
      ]}
    >
      {config.type}
    </Animated.Text>
  );
}

function getConfig(scene) {
  const size = randInt(30, 48);
  const opacity = randInt(7, 10) / 10;
  const type = STRAWBERRY_TYPES[randInt(0, 2)];
  const xPosition = `${randInt(0, 100)}%`;

  const fallDuration = randInt(10000, 30000);
  const fallDelay = randInt(500, 1000);
  return {
    size,
    opacity,
    type,
    xPosition,
    fallDelay,
    fallDuration,
  };
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styles = StyleSheet.create({
  strawberry: {
    // color: "red",
    position: "absolute",
  },
});
