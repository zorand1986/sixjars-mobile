/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import {
  View, StatusBar, Text, ScrollView, TouchableOpacity,
} from "react-native";
import Divider from "../components/Divider";
import Add from "../../assets/Add";
import Food from "../../assets/Food";
import PiggyBank from "../../assets/PiggyBank";
import Entertainment from "../../assets/Entertainment";
import Car from "../../assets/Car";
import Growth from "../../assets/Growth";
import Heart from "../../assets/Heart";
import JarListItem from "../components/JarListItem";
import {
  alignments,
  mediumHorizontalPadding,
  appBackgroundColorPrimary,
  fullWidth,
  basicText,
  smallVerticalMargin,
  basicTextBold,
  secondaryText,
  smallMarginTop,
  colors,
} from "../styles/commonStyles";
import SectionWrapper from "../components/SectionWrapper";
import BasicChart from "../components/BasicChart";

const mockJars = [
  {
    id: 1, code: "ESS", Icon: Food, progress: 0.5, percentage: "50%",
  },
  {
    id: 2, code: "FFR", Icon: PiggyBank, progress: 0.1, percentage: "10%",
  },
  {
    id: 3, code: "ENT", Icon: Entertainment, progress: 0.23, percentage: "23%",
  },
  {
    id: 4, code: "LTP", Icon: Car, progress: 0, percentage: "0%",
  },
  {
    id: 5, code: "PGR", Icon: Growth, progress: 0.9, percentage: "90%",
  },
  {
    id: 6, code: "SHR", Icon: Heart, progress: 1, percentage: "100%",
  },
];

const mockData = [
  {
    id: "1",
    date: "12/10/2021",
    amount: "345",
    note: "groceries",
    jar: "neccessity",
  },
  {
    id: "2",
    date: "12/10/2021",
    amount: "123",
    note: "dining",
    jar: "entertainment",
  },
  {
    id: "3",
    date: "12/10/2021",
    amount: "675",
    note: "madjarski",
    jar: "growth",
  },
  {
    id: "4",
    date: "12/10/2021",
    amount: "345",
    note: "groceries",
    jar: "neccessity",
  },
  {
    id: "5",
    date: "12/10/2021",
    amount: "123",
    note: "dining",
    jar: "entertainment",
  },
  {
    id: "6",
    date: "12/10/2021",
    amount: "675",
    note: "madjarski",
    jar: "growth",
  },
];

const Home = () => {
  const [chartParentWidth, setChartParentWidth] = useState(0);

  return (
    <>
      <ScrollView
        style={[
          alignments.flex,
          appBackgroundColorPrimary,
          mediumHorizontalPadding]}
      >
        <StatusBar barStyle="light-content" />
        <SectionWrapper
          title="Transaction history"
          height={250}
          onLayout={
            ({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)
}
        >
          <ScrollView style={smallMarginTop}>
            {mockData.map((item, index) => (
              <View key={item.id}>
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
                {index !== mockData?.length - 1 && (
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
            ))}
          </ScrollView>
        </SectionWrapper>
        <BasicChart chartParentWidth={chartParentWidth} />
        <SectionWrapper title="jars" style={{ marginBottom: 130 }}>
          <View>
            {mockJars.map((item) => {
              const {
                id, Icon, code, progress, percentage,
              } = item;
              return (
                <JarListItem
                  key={id}
                  Icon={Icon}
                  code={code}
                  progress={progress}
                  percentage={percentage}
                />
              );
            })}
          </View>
        </SectionWrapper>
      </ScrollView>
      <TouchableOpacity style={{
        position: "absolute",
        right: 30,
        bottom: 80,
        backgroundColor: colors.secondary,
        borderRadius: 24,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 30,
      }}
      >
        <Add width={20} height={20} fill="#fff" />
      </TouchableOpacity>
    </>
  );
};

export default Home;
