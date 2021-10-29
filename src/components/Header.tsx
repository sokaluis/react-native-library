import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext';
import { globalStyles } from '../theme/appTheme';

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  const { top: marginTop } = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={[{ marginTop: marginTop + 20 }, styles.renderListHeader]}>
      <Text style={[globalStyles.title, { color: colors.primary }]}>
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
