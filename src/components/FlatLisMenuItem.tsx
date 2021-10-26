import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, CommonActions } from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

const FlatLisMenuItem = ({ menuItem }: Props) => {
  const { name, icon, component } = menuItem;
  const { dispatch } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => dispatch(CommonActions.navigate(component))}>
      <View style={styles.container}>
        <Icon name={icon} size={23} color="grey" />
        <Text style={styles.itemText}>{name}</Text>
        <View style={styles.spacer} />
        <Icon
          name="chevron-forward-outline"
          size={23}
          color="grey"
          style={styles.arrow}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    marginLeft: 10,
    fontSize: 19,
  },
  arrow: {
    alignSelf: 'flex-end',
  },
  spacer: {
    flex: 1,
  },
});

export default FlatLisMenuItem;
