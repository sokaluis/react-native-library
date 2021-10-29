import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';
import { appColors, globalStyles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const ChangeThemeScreen = () => {
  const {
    theme: { colors, currentTheme },
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);
  return (
    <View style={globalStyles.globalContainer}>
      <Header title="Change Theme" />
      <View style={styles.switchContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name="sunny-outline"
            size={20}
            color={currentTheme === 'light' ? colors.text : appColors.dark}
          />
          <Text
            style={{
              color: currentTheme === 'light' ? colors.text : appColors.dark,
              ...styles.iconContainerText,
            }}>
            Light Theme
          </Text>
        </View>
        <CustomSwitch
          isOn={currentTheme === 'dark'}
          onChange={() => {
            if (currentTheme === 'light') {
              setDarkTheme();
            } else {
              setLightTheme();
            }
          }}
        />
        <View style={styles.iconContainer}>
          <Icon
            name="moon-outline"
            size={20}
            color={currentTheme === 'dark' ? colors.text : appColors.light}
          />
          <Text
            style={{
              color: currentTheme === 'dark' ? colors.text : appColors.light,
              ...styles.iconContainerText,
            }}>
            Dark Theme
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainerText: {
    marginLeft: 10,
    fontSize: 15,
  },
});
