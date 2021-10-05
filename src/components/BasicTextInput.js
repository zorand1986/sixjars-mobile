import React from "react";
import { View, TextInput } from "react-native";

import { colors, smallHorizontalPadding, textColorPrimary } from "../styles/commonStyles";

const BasicTextInput = ({
  onChange,
  onChangeText,
  containerStyles,
  placeholder,
  onBlur,
  inputStyles,
  value,
  focused = true,
}) => {
  const styles = {
    container: {
      width: "100%",
      height: 55,
      backgroundColor: colors.bgTertiary,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: "row",
      borderColor: colors.black,
    },

  };

  return (
    <View
      style={[styles?.container,
        containerStyles,
        focused ? { borderColor: colors.textColorSecondary } : { borderColor: colors.black }]}
    >
      <TextInput
        placeholder={placeholder}
        style={[smallHorizontalPadding,
          { flex: 1 },
          textColorPrimary,
          inputStyles]}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

export default BasicTextInput;
