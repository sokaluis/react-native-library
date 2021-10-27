import React from 'react';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../screens/HomeScreens';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertsScreen } from '../screens/AlertsScreen';
import { InputScreen } from '../screens/InputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';

export type RootStackParams = {
  Home: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertsScreen: undefined;
  InputScreen: undefined;
  PullToRefreshScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
      <Stack.Screen name="InputScreen" component={InputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
