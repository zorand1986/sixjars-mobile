import React from "react";
import { View, Text, StatusBar } from "react-native";
import BasicTextInput from "../components/BasicTextInput";
import Button from "../components/Button";
import {
  appBackgroundColorPrimary, colors, flexCenterBasis, mediumHorizontalPadding, primaryBackground, secondaryBackground, mediumHorizontalMargin, largeVerticalMargin, basicText, basicHeadline, smallVerticalMargin, smallHorizontalMargin, largeVerticalPadding
} from "../styles/commonStyles";
import Facebook from "../../assets/Facebook.svg";
import Google from "../../assets/Google";
import Divider from "../components/Divider";
const LoginPage = ({ navigation }) => {
  const handleLogin = () => {
    navigation?.navigate("Logout");
  };

  return (
    <View style={[flexCenterBasis, appBackgroundColorPrimary, mediumHorizontalPadding]}>
      <StatusBar barStyle={"light-content"} />
      <Text style={basicHeadline}>Login</Text>
      <BasicTextInput containerStyles={smallVerticalMargin} placeholder="Username" />
      <BasicTextInput containerStyles={{marginBottom: 8}} placeholder="Password" />
      <View style={{ flexDirection: "row"}}>
        <Button color={secondaryBackground} style={[smallVerticalMargin, smallHorizontalMargin]} onPress={handleLogin} title="Login" />
        <Button color={primaryBackground} style={[smallVerticalMargin, smallHorizontalMargin]} onPress={handleLogin} title="Sign up" />
      </View>
      <View style={[{ flexDirection: "row" }, largeVerticalMargin]}>
        <Divider/>
        <Text style={[basicText, mediumHorizontalMargin]}>Or continue with</Text>
        <Divider/>
      </View>
      <View style={[{ flexDirection: "row" } ]}>
        <Facebook width={35} height={35} style={{ margin: 10, marginRight: 5 }}/>
        <Google width={35} height={35} style={{ margin: 10, marginLeft: 5 }} />
      </View>
    </View>
  );
};

export default LoginPage;
