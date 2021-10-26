import React from 'react';
import {Text, View} from 'react-native';
// Components
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreens = () => {
  return (
    <View>
      <Text>Hola desde el HomeScreen</Text>
      <Icon name="star" size={30} color="grey" />
    </View>
  );
};

export default HomeScreens;
