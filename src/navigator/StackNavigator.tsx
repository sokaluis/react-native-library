import React from 'react';
// Navigation
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreens from '../screens/HomeScreens';

export type RootStackParams = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreens} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
