import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle, useSharedValue, withTiming,
} from "react-native-reanimated";
import { colors } from "../styles/commonStyles";

const ProgressBar = ({ width }) => {
  const progressWidth = useSharedValue(0);

  useEffect(() => {
    progressWidth.value = withTiming(width, { duration: 2000 });
  }, [width, progressWidth]);

  const progressStyle = useAnimatedStyle(() => ({
    height: 5,
    width: progressWidth.value,
  }));

  return (
    <View style={[{
      borderWidth: 1,
      width: 200,
      height: 5,
      borderRadius: 3,
      borderColor: colors.secondary,
    }]}
    >
      <Animated.View
        style={[progressStyle, { backgroundColor: colors.secondary }]}
      />
    </View>
  );
};

export default ProgressBar;
