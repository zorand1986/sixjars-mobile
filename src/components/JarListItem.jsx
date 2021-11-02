/* eslint-disable import/no-unresolved */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  alignments, colors, basicText, selectedJarItem, smallHorizontalPadding,
} from "../styles/commonStyles";
import ProgressBar from "./ProgressBar";
import QuestionMark from "../../assets/QuestionMark";

const JarListItem = ({
  item,
  selected,
  touchable,
  onPress,
  setModalVisible,
  availableAmount,
}) => {
  const Wrapper = touchable ? TouchableOpacity : View;
  const {
    Icon, code, progress, percentage,
  } = item;
  return (
    <Wrapper
      onPress={onPress}
      style={[
        alignments.row,
        { height: 51 },
        alignments.alignCenter,
        alignments.justifyBetween,
        selected && selectedJarItem,
        touchable && smallHorizontalPadding,
      ]}
    >
      <View style={[{
        width: 30,
        height: 30,
        backgroundColor: colors.primary,
        borderRadius: 10,
      },
      alignments.alignCenter,
      alignments.justifyCenter,
      ]}
      >
        <Icon width={17} height={17} fill="#000" />
      </View>
      <View style={{ width: 30 }}>
        <Text style={basicText}>{code}</Text>
      </View>
      <View>
        <ProgressBar width={progress * 200} />
      </View>
      <Text style={[
        basicText,
        { width: 35 },
      ]}
      >
        {availableAmount ?? percentage}

      </Text>
      <TouchableOpacity onPressOut={() => setModalVisible(item?.id - 1)}>
        <QuestionMark
          width={17}
          height={17}
          fill={colors.textColorSecondary}
          style={{ padding: 10 }}
        />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default JarListItem;
