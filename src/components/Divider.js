import React from "react";
import { View } from "react-native";
import { colors } from "../styles/commonStyles";

const Divider = () => {
    return <View style={{flex: 1, borderBottomWidth: 1, borderColor: colors.textColorPrimary, alignSelf: "center"}}/>;
};

export default Divider;