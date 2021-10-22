/* eslint-disable import/no-unresolved */
import React from "react";
import { TouchableOpacity } from "react-native";
import Add from "../../assets/Add";

import { colors } from "../styles/commonStyles";

const FloatingButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      position: "absolute",
      right: 30,
      bottom: 80,
      backgroundColor: colors.secondary,
      borderRadius: 24,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 30,
    }}
  >
    <Add width={20} height={20} fill="#fff" />
  </TouchableOpacity>
);

export default FloatingButton;
