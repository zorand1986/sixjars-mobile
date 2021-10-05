import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import {
  appBackgroundColorPrimary, flexCenterBasis, primaryBackground, secondaryBackground,
} from "../styles/commonStyles";

const LoginPage = ({ navigation }) => {
  const handleLogin = () => {
    navigation?.navigate("Logout");
  };

  return (
    <View style={[flexCenterBasis, appBackgroundColorPrimary]}>
      <Text>Login Screen</Text>
      <Button color={primaryBackground} onPress={handleLogin} title="Button" />
      <Button color={secondaryBackground} onPress={handleLogin} title="Button" />
    </View>
  );
};

export default LoginPage;
