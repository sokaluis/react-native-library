import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext';

export const ItemSeparator = () => {
  const {
    theme: { dividerColor },
  } = useContext(ThemeContext);
  return (
    <View
      style={{ ...styles.itemSeparator, borderBottomColor: dividerColor }}
    />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 8,
  },
});
