import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import { alignments, colors, basicText } from "../styles/commonStyles";

const JarListItem = ({Icon, code, percentage, progress}) => {
    const [indeterminate, setIndeterminate] = useState(true);

    const animate = () => {
        setTimeout(() => {
          setIndeterminate(false);
        }, 50);
      };

      useEffect(() => {
        animate();
      });


    return (
        <View style={[alignments.row, {height: 51}, alignments.alignCenter, alignments.justifyBetween]}>
            <View style={[{width: 30, height: 30, backgroundColor: colors.primary, borderRadius: 10}, alignments.alignCenter, alignments.justifyCenter]} >
                <Icon width={17} height={17} fill="#000"/>
            </View>
            <View style={{width: 30}}>
            <Text style={basicText}>{code}</Text>
            </View>
            <View>
                <Progress.Bar animationType="timing" width={200}  indeterminate={indeterminate} progress={progress} color={colors.primary} />
            </View>
            <Text style={[basicText, {width: 35}]}>{percentage}</Text>
        </View>
    );
};

export default JarListItem;