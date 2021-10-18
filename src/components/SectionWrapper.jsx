/* eslint-disable import/no-unresolved */
import React from "react";
import { View, Text } from "react-native";
import {
  alignments,
  appBackgroundColorSecondary,
  smallBorderRadius,
  labelText,
  colors,
  mediumPadding,
  smallMarginBottom,
} from "../styles/commonStyles";
import ArrowRight from "../../assets/ArrowRight";

const SectionWrapper = ({
  children, title, onLayout, height, style,
}) => (
  <View
    onLayout={onLayout}
    style={[
      appBackgroundColorSecondary,
      smallBorderRadius,
      height && { height },
      mediumPadding,
      smallMarginBottom,
      style]}
  >
    <View style={[alignments.row, alignments.justifyBetween]}>
      {title && <Text style={labelText}>{title}</Text>}
      <ArrowRight width={25} height={25} fill={colors.secondary} />
    </View>
    {children}
  </View>
);

export default SectionWrapper;
