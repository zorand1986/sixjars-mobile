import React from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import { alignments, colors, basicText } from "../styles/commonStyles";

const JarListItem = ({Icon, code, progress, percentage}) => {
    return (
        <View style={[alignments.row, {height: 51}, alignments.alignCenter, alignments.justifyBetween]}>
            <View style={[{width: 30, height: 30, backgroundColor: colors.primary, borderRadius: 10}, alignments.alignCenter, alignments.justifyCenter]} >
                <Icon width={17} height={17} fill="#000"/>
            </View>
            <View style={{width: 30}}>
            <Text style={basicText}>{code}</Text>
            </View>
            <View>
                <Progress.Bar width={200} progress={progress} color={colors.primary} />
            </View>
            <Text style={[basicText, {width: 30}]}>{percentage}</Text>
        </View>
    );
};

export default JarListItem;