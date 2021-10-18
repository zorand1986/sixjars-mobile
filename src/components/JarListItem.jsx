import React from "react";
import { View, Text } from "react-native";

import { alignments, colors, basicText } from "../styles/commonStyles";
import ProgressBar from "./ProgressBar";

const JarListItem = ({
  Icon, code, percentage, progress,
}) => (
  <View style={[
    alignments.row,
    { height: 51 },
    alignments.alignCenter,
    alignments.justifyBetween]}
  >
    <View style={[{
      width: 30, height: 30, backgroundColor: colors.primary, borderRadius: 10,
    }, alignments.alignCenter, alignments.justifyCenter]}
    >
      <Icon width={17} height={17} fill="#000" />
    </View>
    <View style={{ width: 30 }}>
      <Text style={basicText}>{code}</Text>
    </View>
    <View>
      <ProgressBar width={progress * 200} />
    </View>
    <Text style={[basicText, { width: 35 }]}>{percentage}</Text>
  </View>
);

export default JarListItem;
