import React from 'react';
import {View, Text, Button} from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Logout')} />
    </View>
  );
};

export default LoginPage;
