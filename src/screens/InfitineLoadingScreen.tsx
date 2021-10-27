import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';

export const InfitineLoadingScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={() => <Header title="InfitineLoadingScreen" />}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  textItem: {
    backgroundColor: 'green',
    height: 250,
  },
});
