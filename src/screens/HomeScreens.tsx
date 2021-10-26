import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { menuItems } from '../data/mockData';
import FlatLisMenuItem from '../components/FlatLisMenuItem';

const HomeScreens = () => {
  const { top: marginTop } = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={[{ marginTop: marginTop + 20 }, styles.renderListHeader]}>
        <Text style={globalStyles.title}>Opciones de Menu</Text>
      </View>
    );
  };
  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={[styles.homeContainer, globalStyles.globalMargin]}>
      <FlatList
        data={menuItems}
        ListHeaderComponent={() => renderListHeader()}
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
  renderListHeader: {
    marginBottom: 20,
  },
  itemSeparator: {
    borderBottomWidth: 5,
    opacity: 0.4,
    marginVertical: 8,
  },
});

export default HomeScreens;
