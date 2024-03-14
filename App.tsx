import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AuthNavigation from './src/navigation/AuthNavigation';

const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 300);
  return <AuthNavigation />;
};

export default App;
