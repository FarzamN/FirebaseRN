import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 300);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
