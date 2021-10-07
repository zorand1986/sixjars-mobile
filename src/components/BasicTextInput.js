import React, { useState } from "react";
import { View, TextInput } from "react-native";

import { colors, smallHorizontalPadding, textColorPrimary, textColorSecondary } from "../styles/commonStyles";

const BasicTextInput = ({
  onChange,
  onChangeText,
  containerStyles,
  placeholder,
  onBlur,
  inputStyles,
  value,
  autofocus
}) => {
  const [focused, setFocused] = useState(false);
  const styles = {
    container: {
      width: "100%",
      height: 45,
      backgroundColor: colors.bgTertiary,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: "row",
      borderColor: colors.black,
    },

  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <View
      style={[styles?.container,
        containerStyles,
        focused ? { borderColor: colors.textColorSecondary } : { borderColor: colors.black }]}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={textColorSecondary}
        style={[smallHorizontalPadding,
          { flex: 1 },
          textColorPrimary,
          inputStyles]}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        autofocus={autofocus}
        autoCorrect={false}
      />
    </View>
  );
};

export default BasicTextInput;
