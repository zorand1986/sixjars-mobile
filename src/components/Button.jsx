import React from "react";
import { Pressable, Text, View } from "react-native";
import {
  smallVerticalPadding,
  largeHorizontalPadding,
  textColorPrimary,
  smallBorderRadius,
} from "../styles/commonStyles";

const Button = ({
  title, onPress, icon, color, style,
}) => (
  <Pressable
    style={[
      smallVerticalPadding,
      largeHorizontalPadding,
      smallBorderRadius,
      { ...color },
      style]}
    onPress={onPress}
  >
    <View>
      {icon ?? icon}
      <Text style={textColorPrimary}>{title}</Text>
    </View>
  </Pressable>
);

export default Button;
