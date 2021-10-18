/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import {
  View, TextInput, TouchableOpacity,
} from "react-native";

import OpenedEye from "../../assets/OpenedEye";
import ClosedEye from "../../assets/ClosedEye";

import {
  colors, smallHorizontalPadding, textColorPrimary, textColorSecondary,
} from "../styles/commonStyles";

const BasicTextInput = ({
  onChange,
  onChangeText,
  containerStyles,
  placeholder,
  inputStyles,
  value,
  autofocus,
  secureTextEntry,
  error,
}) => {
  const [focused, setFocused] = useState(false);
  const [secured, setSecured] = useState(secureTextEntry);
  const styles = {
    container: {
      height: 45,
      backgroundColor: colors.bgTertiary,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: "row",
      borderColor: colors.black,
    },

  };

  const secureIconStyle = {
    position: "absolute",
    top: 11,
    right: 10,
    fill: colors.textColorPrimary,
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleSecure = () => {
    setSecured(!secured);
  };

  const renderSecureIcon = () => {
    if (!secureTextEntry) return null;
    if (secured) {
      return (
        <OpenedEye width={20} height={20} style={secureIconStyle} />
      );
    }
    return <ClosedEye width={20} height={20} style={secureIconStyle} />;
  };

  return (
    <View
      style={[styles?.container,
        containerStyles,
        focused
          ? { borderColor: colors.textColorSecondary }
          : { borderColor: colors.black },
        error && { borderColor: colors.error },
      ]}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={textColorSecondary}
        style={[smallHorizontalPadding,
          { flex: 1 },
          textColorPrimary,
          inputStyles]}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        autofocus={autofocus}
        autoCorrect={false}
        secureTextEntry={secured}
      />
      <TouchableOpacity onPress={handleSecure}>
        {renderSecureIcon()}
      </TouchableOpacity>
    </View>
  );
};

export default BasicTextInput;
