import React, { useState } from "react";
import { View, StatusBar, Text, ScrollView, TouchableOpacity
 } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Divider from "../components/Divider";
import ArrowRight from "../../assets/ArrowRight";
import Add from "../../assets/Add";
import Food from "../../assets/Food";
import PiggyBank from "../../assets/PiggyBank";
import Entertainment from "../../assets/Entertainment";
import Car from "../../assets/Car";
import Growth from "../../assets/Growth";
import Heart from "../../assets/Heart";
import JarListItem from "../components/JarListItem";
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
    colors,
    flexCenterBasis
 } from "../styles/commonStyles";
import SectionWrapper from "../components/SectionWrapper";

const mockData = [
    {id: "1", date: "12/10/2021", amount: "345", note: "groceries", jar: "neccessity"},
    {id: "2", date: "12/10/2021", amount: "123", note: "dining", jar: "entertainment"},
    {id: "3", date: "12/10/2021", amount: "675", note: "madjarski", jar: "growth"},
    {id: "4", date: "12/10/2021", amount: "345", note: "groceries", jar: "neccessity"},
    {id: "5", date: "12/10/2021", amount: "123", note: "dining", jar: "entertainment"},
    {id: "6", date: "12/10/2021", amount: "675", note: "madjarski", jar: "growth"}
];

const mockJars = [
    {id: 1, code: "ESS", Icon: Food, progress: 0.5, percentage: "50%"},
    {id: 2, code: "FFR", Icon: PiggyBank, progress: 0.1, percentage: "10%"},
    {id: 3, code: "ENT", Icon: Entertainment, progress: 0.23, percentage: "23%"},
    {id: 4, code: "LTP", Icon: Car, progress: 0, percentage: "0%"},
    {id: 5, code: "PGR", Icon: Growth, progress: 0.9, percentage: "90%"},
    {id: 6, code: "SHR", Icon: Heart, progress: 1, percentage: "100%"},
];

const bottomLabels = Array.from({length: 31}).map((item, index) => index +1 );

const Home = () => {
    const [chartParentWidth, setChartParentWidth] = useState(0);
    console.log({chartParentWidth});
    return (
        <>
            <ScrollView style={[ alignments.flex, appBackgroundColorPrimary, mediumHorizontalPadding]}>
                <StatusBar barStyle={"light-content"} />
                <SectionWrapper title="Transaction history" height={250} onLayout={({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)}>
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
                </SectionWrapper>
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
                <SectionWrapper title="jars" style={{ marginBottom: 130 }}>
                    <View>
                        {mockJars.map(item => {
                            const {id, Icon, code, progress, percentage} = item;
                            return <JarListItem key={id} Icon={Icon} code={code} progress={progress} percentage={percentage} />;
                        })}
                    </View>
                </SectionWrapper>
            </ScrollView>
            <TouchableOpacity style={{ position: "absolute", right: 30, bottom: 80, backgroundColor: colors.secondary, borderRadius: 24, width: 50, height: 50, alignItems: "center", justifyContent: "center", zIndex: 30}}>
                <Add width={20} height={20} fill="#fff" />
            </TouchableOpacity>
        </>
    );
};

export default Home;