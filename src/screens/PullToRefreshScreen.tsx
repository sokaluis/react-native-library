import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { appColors, globalStyles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('refrescando');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#ccc"
          colors={['white', 'red', appColors.PRIMARY]}
          style={{ backgroundColor: appColors.PRIMARY }}
          tintColor="white"
          title="Refreshing"
        />
      }>
      <View style={globalStyles.globalContainer}>
        <Header title="Pull to Refresh" />
        {data && <Header title={data} />}
      </View>
    </ScrollView>
  );
};
