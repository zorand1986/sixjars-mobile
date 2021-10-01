import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const LogoutPage = ({navigation}) => {
  return (
    <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Logout" component={LogoutPage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
