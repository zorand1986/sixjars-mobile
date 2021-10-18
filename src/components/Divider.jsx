import React from "react";
import { View } from "react-native";
import { colors } from "../styles/commonStyles";

const Divider = () => (
  <View style={{
    flex: 1,
    borderBottomWidth: 1,
    borderColor:
    colors.textColorSecondary,
    alignSelf: "center",
  }}
  />
);

export default Divider;
