import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appColors, globalStyles } from '../theme/appTheme';

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={[{ marginTop: marginTop + 20 }, styles.renderListHeader]}>
      <Text style={[globalStyles.title, { color: appColors.PRIMARY }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  renderListHeader: {
    marginBottom: 20,
  },
});
