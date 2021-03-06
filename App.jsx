import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginPage";
import Signup from "./src/screens/Signup";
import ForgotPassword from "./src/screens/ForgotPassword";
import Setup from "./src/screens/Setup";
import AddExpense from "./src/screens/AddExpense";

import { appBackgroundColorPrimary, colors } from "./src/styles/commonStyles";
import Home from "./src/screens/Home";
import LiquidSwipe from "./src/components/LiquidSwipe";
import MonthlyBudget from "./src/screens/MonthlyBudget";
import AddBudget from "./src/screens/AddBudget";

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerStyle: {
    ...appBackgroundColorPrimary,
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
        name="LiquidSwipe"
        component={LiquidSwipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          title: "Add expense",
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name="AddBudget"
        component={AddBudget}
        options={{
          title: "Add Budget",
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name="MonthlyBudget"
        component={MonthlyBudget}
        options={{
          title: "Monthly budget",
          ...headerOptions,
        }}
      />

      <Stack.Screen
        name="Setup"
        component={Setup}
        options={{
          title: "Currency",
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: "Forgot Password",
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Sign Up",
          ...headerOptions,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
