import React from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { globalStyles } from '../theme/appTheme';

export const Animation101Screen = () => {
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
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    marginVertical: 5,
  },
});
