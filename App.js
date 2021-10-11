import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginPage";
import Signup from "./src/screens/Signup";
import ForgotPassword from "./src/screens/ForgotPassword";

import { appBackgroundColorPrimary, colors } from "./src/styles/commonStyles";

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerStyle: {
    ...appBackgroundColorPrimary
  },
  headerTintColor: colors.textColorPrimary,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name="Login" 
       component={LoginPage}
      options={{headerShown: false}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
          title: "Forgot Password",
          ...headerOptions
        }} />
      <Stack.Screen name="Signup" component={Signup} options={{
          title: "Sign Up",
          ...headerOptions
        }}  />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
