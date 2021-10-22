import React from "react";
import Modal from "react-native-modal";
import {
  Text,
  View,
} from "react-native";
import {
  alignments,
  basicHeadline,
  basicText,
  colors,
  largePadding,
  largeVerticalMargin,
  primaryBackground,
  smallBorderRadius,
} from "../styles/commonStyles";
import Button from "./Button";

const PopupModal = ({
  modalVisible,
  item,
  onPress,
}) => (
  <Modal
    animationIn="fadeInDown"
    animationOut="fadeOutUp"
    animationInTiming={800}
    animationOutTiming={800}
    isVisible={modalVisible}
    coverScreen={false}
  >

    <View
      style={[
        alignments.alignCenter,
        alignments.justifyCenter,
        largePadding,
        { backgroundColor: colors.bgTertiary },
        smallBorderRadius,
      ]}
    >
      <Text style={basicHeadline}>{item?.title}</Text>
      <Text
        style={[
          basicText,
          { textAlign: "center" },
        ]}
      >
        {item?.description}

      </Text>
      <Button
        title="Close"
        style={largeVerticalMargin}
        color={primaryBackground}
        onPress={onPress}
      />
    </View>
  </Modal>
);

export default PopupModal;
