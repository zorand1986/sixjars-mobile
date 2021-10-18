import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Svg, { Text } from "react-native-svg";
import { colors } from "../styles/commonStyles";

const bottomLabels = Array.from({ length: 31 }).map((item, index) => index + 1);

const chartDecorator = () => (
  <View>
    <Svg>
      <Text
        x={300}
        y={130}
        fill={colors.tertiary}
        fontSize="12"
        textAnchor="start"
      >
        avg. 330
      </Text>
    </Svg>
  </View>
);

const BasicChart = ({ chartParentWidth }) => (
  <View>
    <LineChart
      data={{
        labels: bottomLabels,
        datasets: [
          {
            data: Array.from({ length: 31 }).map(() => Math.random() * 100),
          },
          {
            data: Array.from({ length: 31 }).map(() => 50),
            color: () => "white", // optional
            strokeWidth: 1, // optional
            withDots: false,
            withInnerLines: true,
          },
        ],
      }}
      decorator={chartDecorator}
      width={chartParentWidth} // from react-native
      height={250}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={3} // optional, defaults to 1
      chartConfig={{
        backgroundColor: colors.primary,
        backgroundGradientFrom: colors.bgSecondary,
        backgroundGradientTo: colors.bgSecondary,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
          r: "2",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
        propsForHorizontalLabels: {
          fontSize: 8,
        },
        propsForVerticalLabels: {
          fontSize: 6,
        },
      }}
      bezier
      style={{
        borderRadius: 8,
        marginHorizontal: 0,
        marginTop: 16,
        paddingRight: 40,
        paddingBottom: 12,
      }}
    />
  </View>
);

export default BasicChart;
