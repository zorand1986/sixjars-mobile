import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const bottomLabels = Array.from({length: 31}).map((item, index) => index +1 );

const BasicChart = ({ chartParentWidth }) => {
    return (
        <View>
        <LineChart
            data={{
            labels: bottomLabels,
            datasets: [
                {
                data: Array.from({length: 31}).map(() => Math.random() * 100)
                },
                {
                data: Array.from({ length: 31 }).map(() => 50)
                }
            ]
            }}
            width={chartParentWidth} // from react-native
            height={250}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={2} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
                r: "3",
                strokeWidth: "2",
                stroke: "#ffa726"
            },
            propsForHorizontalLabels: {
                fontSize: 8,
            },
            propsForVerticalLabels: {
                fontSize: 6
            }
            }}
            bezier
            style={{
            borderRadius: 8,
            marginHorizontal: 0,
            marginTop: 16,
            paddingRight: 40,
            paddingBottom: 12
            }}
        />
        </View>
    );
};

export default BasicChart;