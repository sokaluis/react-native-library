import React from 'react';
import 'react-native-gesture-handler';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
// Componets
import StackNavigator from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
