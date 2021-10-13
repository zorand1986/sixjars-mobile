import React from "react";
import { View, Text } from "react-native";
import { alignments, appBackgroundColorSecondary, smallBorderRadius, labelText, colors, mediumPadding, smallMarginBottom } from "../styles/commonStyles";
import ArrowRight from "../../assets/ArrowRight";
const SectionWrapper = ({ children, title, onLayout, height, style }) => {
    return (
        <View onLayout={onLayout} style={[appBackgroundColorSecondary, smallBorderRadius, height && { height: height }, mediumPadding, smallMarginBottom, style]}>
            <View style={[alignments.row, alignments.justifyBetween]}>
                {title && <Text style={labelText}>{title}</Text>}
                <ArrowRight width={25} height={25} fill={colors.secondary} />
            </View>
            {children}
        </View>
    );
};

export default SectionWrapper;