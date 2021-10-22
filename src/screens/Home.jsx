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
import PopupModal from "../components/PopupModal";

import {
  alignments,
  mediumHorizontalPadding,
  appBackgroundColorPrimary,
  smallMarginTop,
} from "../styles/commonStyles";

const Home = ({ navigation }) => {
  const [chartParentWidth, setChartParentWidth] = useState(0);
  const [modalVisible, setModalVisible] = useState(-1);

  const handleCloseModal = () => {
    setModalVisible(-1);
  };

  return (
    <View style={{ flex: 1 }}>
      <PopupModal
        modalVisible={modalVisible > -1}
        onPress={handleCloseModal}
        item={mockJars[modalVisible]}
      />
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
            {mockJars.map((item) => (
              <JarListItem
                key={item?.id}
                item={item}
                setModalVisible={(id) => setModalVisible(id)}
              />
            ))}
          </View>
        </SectionWrapper>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate("AddExpense")} />
    </View>
  );
};

export default Home;
