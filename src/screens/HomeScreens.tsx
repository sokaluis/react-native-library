import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { menuItems } from '../data/mockData';
import FlatLisMenuItem from '../components/FlatLisMenuItem';
import { Header } from '../components/Header';

const HomeScreens = () => {
  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={[styles.homeContainer, globalStyles.globalMargin]}>
      <FlatList
        data={menuItems}
        ListHeaderComponent={() => <Header title="Opciones de Menú" />}
        renderItem={({ item }) => <FlatLisMenuItem menuItem={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  itemSeparator: {
    borderBottomWidth: 5,
    opacity: 0.4,
    marginVertical: 8,
  },
});

export default HomeScreens;
