import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { countries } from "countries-list";

import Button from "../components/Button";
import { 
    alignments,
    fullWidth, 
    appBackgroundColorPrimary, 
    mediumHorizontalPadding, 
    basicText, 
    xlMarginTop, 
    smallVerticalMargin, 
    primaryBackground,
    smallHorizontalMargin,
    labelText,
    xlMarginBottom,
    colors
 } from "../styles/commonStyles";
import Divider from "../components/Divider";

const Setup = () => {

    const formatLong = (string) => {
        if (string.length < 30) {
            return string;
        }
        let trimmedString = string.substr(0, 30);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        return `${trimmedString}...`; 
    };

    const formatCurrency = (curr) => {
        if (curr.includes(",")) {
            return curr.split(",")[0];
        }
        return curr;
    };

    const parseCountries = Object.keys(countries);

    const renderItem = item => {

        return (
            <View key={`${countries[item?.item]?.name}-${countries[item?.item]?.phone}`} style={[alignments.row, alignments.justifyBetween, alignments.alignCenter, {height: 51}]}>
                <View style={alignments.row}>
                    <Text style={{ width: 40 }}>{countries[item?.item]?.emoji}</Text>
                    <Text style={[basicText, {width: 40}]}>{item?.item}</Text>
                    <Text style={basicText}>{formatLong(countries[item?.item]?.name)}</Text>
                </View>
                <Text style={[basicText, alignments.alignCenter]}>{formatCurrency(countries[item?.item]?.currency || "USD")}</Text>
            </View>
        );
    };

    return (
        <View style={[ alignments.flex, appBackgroundColorPrimary, mediumHorizontalPadding]}>
        <StatusBar barStyle={"light-content"} />
        <Text style={[labelText, xlMarginTop]}>Select currency</Text>
            <View style={[smallVerticalMargin, fullWidth, { marginBottom: 60 }]}>
            <FlatList
                data={parseCountries}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (
                    <View
                    style={{
                      height: 1,
                      width: "100%",
                      backgroundColor: colors.textColorPrimary,
                    }}
                  />
                )}
                keyExtractor={(item, idx) => idx}
            />
            </View>
        <View style={[alignments.row, alignments.justifyEnd]}>
            <Button 
            color={primaryBackground} 
            style={[smallVerticalMargin, smallHorizontalMargin]} 
            onPress={() => console.log(selected)} title="Confirm"
            />
        </View>
    </View>
    );
};

export default Setup;