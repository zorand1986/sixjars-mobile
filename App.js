import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginPage";
import { appBackgroundColorPrimary, colors } from "./src/styles/commonStyles";

const LogoutPage = ({ navigation }) => (
  <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
);
const Stack = createNativeStackNavigator();

const App = () => (
  // <SafeAreaView style={backgroundStyle}>
  //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name="Login" 
       component={LoginPage}
      options={{headerShown: false}}
      />
      <Stack.Screen name="Logout" component={LogoutPage} />
    </Stack.Navigator>
  </NavigationContainer>
  // </SafeAreaView>
);

export default App;
