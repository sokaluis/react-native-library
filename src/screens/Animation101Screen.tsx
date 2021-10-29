import React, { useContext } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/themeContext';
import { useAnimation } from '../hooks/useAnimation';
import { globalStyles } from '../theme/appTheme';

export const Animation101Screen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
    endMovingPosition,
  } = useAnimation();

  return (
    <View style={globalStyles.globalContainer}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          transform: [{ translateY: position }],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
      />
      <Button
        title="Fade Out"
        onPress={() => {
          fadeOut();
          endMovingPosition(-100);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    marginVertical: 5,
  },
});
