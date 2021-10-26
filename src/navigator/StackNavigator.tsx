import React from 'react';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../screens/HomeScreens';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';

export type RootStackParams = {
  Home: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
