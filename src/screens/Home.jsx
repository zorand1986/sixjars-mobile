/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import {
  View, StatusBar, ScrollView,
} from "react-native";
import JarListItem from "../components/JarListItem";
import FloatingButton from "../components/FloatingButton";
import SectionWrapper from "../components/SectionWrapper";
import BasicChart from "../components/BasicChart";
import TransactionListItem from "../components/TransactionListItem";
import { mockJars, mockData } from "../data/mockData";

import {
  alignments,
  mediumHorizontalPadding,
  appBackgroundColorPrimary,
  smallMarginTop,
} from "../styles/commonStyles";

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
              <TransactionListItem
                key={item?.id}
                item={item}
                index={index}
                data={mockData}
              />
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
      <FloatingButton />
    </>
  );
};

export default Home;
