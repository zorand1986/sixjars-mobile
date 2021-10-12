import React from "react";
import { View, StatusBar, Text, ScrollView } from "react-native";
import Divider from "../components/Divider";
import { appBackgroundColorSecondary, borderRadius, smallBorderRadius, alignments, mediumHorizontalPadding, appBackgroundColorPrimary, labelText, smallVerticalPadding, smallHorizontalPadding, fullWidth, basicText, smallVerticalMargin, basicTextBold, secondaryText, smallMarginTop, mediumVerticalPadding, mediumPadding, smallMarginBottom } from "../styles/commonStyles";

const mockData = [
    {id: "1", date: "12/10/2021", amount: "345", note: "groceries", jar: "neccessity"},
    {id: "2", date: "12/10/2021", amount: "123", note: "dining", jar: "entertainment"},
    {id: "3", date: "12/10/2021", amount: "675", note: "madjarski", jar: "growth"},
    {id: "4", date: "12/10/2021", amount: "345", note: "groceries", jar: "neccessity"},
    {id: "5", date: "12/10/2021", amount: "123", note: "dining", jar: "entertainment"},
    {id: "6", date: "12/10/2021", amount: "675", note: "madjarski", jar: "growth"}
];

const Home = () => {
    return (
        <View style={[ alignments.flex, appBackgroundColorPrimary, mediumHorizontalPadding]}>
            <StatusBar barStyle={"light-content"} />
            <View style={[appBackgroundColorSecondary, smallBorderRadius, { height: 250 }, mediumPadding, smallMarginBottom]}>
                <View>
                    <Text style={labelText}>Last transactions</Text>
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
            
        </View>
    );
};

export default Home;