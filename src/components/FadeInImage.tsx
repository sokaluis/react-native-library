import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import { ThemeContext } from '../context/themeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          size={30}
          color={colors.primary}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={{ ...(style as Object), opacity }}
        onLoadEnd={() => {
          setIsLoading(false);
          fadeIn(1000);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 400,
  },
});
