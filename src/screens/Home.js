import React, { useState } from "react";
import { View, StatusBar, Text, ScrollView, TouchableOpacity
 } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Divider from "../components/Divider";
import ArrowRight from "../../assets/ArrowRight";
import Add from "../../assets/Add";
import { 
    appBackgroundColorSecondary,
    smallBorderRadius,
    alignments,
    mediumHorizontalPadding,
    appBackgroundColorPrimary,
    labelText,
    fullWidth,
    basicText,
    smallVerticalMargin,
    basicTextBold,
    secondaryText,
    smallMarginTop,
    mediumPadding,
    smallMarginBottom,
    colors
 } from "../styles/commonStyles";

const mockData = [
    {id: "1", date: "12/10/2021", amount: "345", note: "groceries", jar: "neccessity"},
    {id: "2", date: "12/10/2021", amount: "123", note: "dining", jar: "entertainment"},
    {id: "3", date: "12/10/2021", amount: "675", note: "madjarski", jar: "growth"},
    {id: "4", date: "12/10/2021", amount: "345", note: "groceries", jar: "neccessity"},
    {id: "5", date: "12/10/2021", amount: "123", note: "dining", jar: "entertainment"},
    {id: "6", date: "12/10/2021", amount: "675", note: "madjarski", jar: "growth"}
];

const bottomLabels = Array.from({length: 31}).map((item, index) => index +1 );

const Home = () => {
    const [chartParentWidth, setChartParentWidth] = useState(0);
    return (
        <View style={[ alignments.flex, appBackgroundColorPrimary, mediumHorizontalPadding]}>
            <StatusBar barStyle={"light-content"} />
            <View onLayout={({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)} style={[appBackgroundColorSecondary, smallBorderRadius, { height: 250 }, mediumPadding, smallMarginBottom]}>
                <View style={[alignments.row, alignments.justifyBetween]}>
                    <Text style={labelText}>Last transactions</Text>
                    <ArrowRight width={25} height={25} fill={colors.secondary} />
                </View>
                <ScrollView style={smallMarginTop}>
                    {mockData.map((item, index) => (
                        <View key={item.id}>
                            <View style={[alignments.row, fullWidth, alignments.justifyBetween]}>
                                <View style={alignments.column}>
                                    <Text style={basicText}>{item?.date}</Text>
                                    <Text style={[secondaryText, smallMarginTop]}>{item?.note}</Text>
                                </View>
                                <View style={alignments.justifyCenter}>
                                    <Text style={basicTextBold}>{item?.amount}</Text>
                                </View>
                            </View>
                            {index !== mockData?.length -1 && (
                            <View  style={[alignments.row, { height: 1 }, smallVerticalMargin]}>
                                 <Divider/>
                             </View>
                            )}
                         </ View>
                    ))}
                </ScrollView>
            </View>
            <View>
                <Text style={labelText}>Daily trend</Text>
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
                        marginTop: 0,
                        // marginRight: 20,
                        paddingRight: 40,
                        // paddingTop: 24,
                        paddingBottom: 24
                        }}
                    />
                    </View>
                    <TouchableOpacity style={{ position: "absolute", right: 30, bottom: 80, backgroundColor: colors.secondary, borderRadius: 24, width: 50, height: 50, alignItems: "center", justifyContent: "center"}}>
                        <Add width={20} height={20} fill="#fff" />
                    </TouchableOpacity>
            </View>
    );
};

export default Home;