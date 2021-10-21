import React from "react";
import {
  View, Text, StatusBar, Pressable,
} from "react-native";
import BasicTextInput from "../components/BasicTextInput";
import Button from "../components/Button";
import {
  appBackgroundColorPrimary,
  flexCenterBasis,
  mediumHorizontalPadding,
  primaryBackground,
  secondaryBackground,
  mediumHorizontalMargin,
  largeVerticalMargin,
  basicText,
  basicHeadline,
  smallVerticalMargin,
  smallHorizontalMargin,
  alignments,
  smallMarginBottom,
  largeMarginBottom,
} from "../styles/commonStyles";
import Facebook from "../../assets/Facebook.svg";
import Google from "../../assets/Google.svg";
import Divider from "../components/Divider";

const LoginPage = ({ navigation }) => {
  const handleLogin = () => {
    navigation?.navigate("Home");
  };

  const handleForgotPassword = () => {
    navigation?.navigate("ForgotPassword");
  };

  return (
    <View
      style={[
        flexCenterBasis,
        appBackgroundColorPrimary,
        mediumHorizontalPadding]}
    >
      <StatusBar barStyle="light-content" />
      <Text style={basicHeadline}>Login</Text>
      <BasicTextInput
        containerStyles={smallVerticalMargin}
        placeholder="Username"
      />
      <BasicTextInput
        secureTextEntry
        containerStyles={smallMarginBottom}
        placeholder="Password"
      />
      <Pressable
        style={[
          alignments.row,
          alignments.selfAlignEnd,
          largeMarginBottom,
        ]}
        onPress={handleForgotPassword}
      >
        <Text style={basicText}>ForgotPassword?</Text>
      </Pressable>
      <View style={alignments.row}>
        <Button
          color={secondaryBackground}
          style={[smallVerticalMargin, smallHorizontalMargin]}
          onPress={handleLogin}
          title="Login"
        />
        <Button
          color={primaryBackground}
          style={[smallVerticalMargin, smallHorizontalMargin]}
          onPress={handleLogin}
          title="Sign up"
        />
      </View>
      <View style={[alignments.row, largeVerticalMargin]}>
        <Divider />
        <Text
          style={[basicText, mediumHorizontalMargin]}
        >
          Or continue with
        </Text>
        <Divider />
      </View>
      <View style={alignments.row}>
        <Facebook
          width={35}
          height={35}
          style={{ margin: 10, marginRight: 5 }}
        />
        <Google width={35} height={35} style={{ margin: 10, marginLeft: 5 }} />
      </View>
    </View>
  );
};

export default LoginPage;
