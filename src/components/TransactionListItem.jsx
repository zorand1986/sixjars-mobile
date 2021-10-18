import React from "react";
import { View, Text } from "react-native";
import Divider from "./Divider";

import {
  alignments,
  fullWidth,
  basicText,
  secondaryText,
  smallMarginTop,
  basicTextBold,
  smallVerticalMargin,
} from "../styles/commonStyles";

const TransactionListItem = ({ item, index, data }) => (
  <View>
    <View
      style={[alignments.row, fullWidth, alignments.justifyBetween]}
    >
      <View style={alignments.column}>
        <Text style={basicText}>{item?.date}</Text>
        <Text
          style={[secondaryText, smallMarginTop]}
        >
          {item?.note}

        </Text>
      </View>
      <View style={alignments.justifyCenter}>
        <Text style={basicTextBold}>{item?.amount}</Text>
      </View>
    </View>
    {index !== data?.length - 1 && (
      <View
        style={[
          alignments.row,
          { height: 1 },
          smallVerticalMargin]}
      >
        <Divider />
      </View>
    )}
  </View>
);

export default TransactionListItem;
