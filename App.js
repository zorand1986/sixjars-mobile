import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginPage";

const LogoutPage = ({ navigation }) => (
  <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
);
const Stack = createNativeStackNavigator();

const App = () => (
  // <SafeAreaView style={backgroundStyle}>
  //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Logout" component={LogoutPage} />
    </Stack.Navigator>
  </NavigationContainer>
  // </SafeAreaView>
);

export default App;
