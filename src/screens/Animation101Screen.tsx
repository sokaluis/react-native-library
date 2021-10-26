import React from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';

export const Animation101Screen = () => {
  const {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
    endMovingPosition,
  } = useNavigation();

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
