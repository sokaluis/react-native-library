import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { globalStyles } from '../theme/appTheme';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false },
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });
  return (
    <View style={globalStyles.globalContainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.purpleBox]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#75CEDB',
    width: 150,
    height: 150,
  },
});
