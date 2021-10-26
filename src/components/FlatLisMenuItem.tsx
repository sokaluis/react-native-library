import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  menuItem: MenuItem;
}

const FlatLisMenuItem = ({ menuItem }: Props) => {
  const { name, icon } = menuItem;
  return (
    <TouchableOpacity>
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
