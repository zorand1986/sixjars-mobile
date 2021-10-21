import Color from "color";
import React from "react";
import {
  View, Text, StyleSheet, Dimensions, Image,
} from "react-native";
import Svg, {
  RadialGradient, Defs, Rect, Stop,
} from "react-native-svg";
import {
  primaryBackground, xlMarginTop,
} from "../styles/commonStyles";
import Button from "./Button";

const { width, height } = Dimensions.get("screen");
const SIZE = width - 150;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 75,
    paddingTop: 150,
    alignItems: "center",
  },
  image: {
    width: SIZE,
    height: SIZE,
    marginBottom: "40%",
  },
  title: {
    fontSize: 48,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

const Slide = ({
  slide: {
    picture, color, title, description,
  },
  isLast,
  navigation,
}) => {
  const lighterColor = Color(color).lighten(0.5).toString();
  const handleContinue = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {isLast && (
        <View style={[xlMarginTop, { zIndex: 1000 }]}>
          <Button
            title="Continue"
            color={primaryBackground}
            onPress={handleContinue}
          />
        </View>
        )}
      </View>
    </>
  );
};

export default Slide;
