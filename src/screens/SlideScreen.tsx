import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { items, Slide } from '../data/sliderData';
import { useAnimation } from '../hooks/useAnimation';
import { appColors } from '../theme/appTheme';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const SlideScreen = () => {
  const [dotIndex, setDotIndex] = useState(0);
  const { opacity, fadeIn, fadeOut } = useAnimation();

  useEffect(() => {
    if (dotIndex !== 2) {
      fadeOut();
    } else {
      fadeIn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dotIndex]);

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.renderItemContainer}>
        <Text style={styles.renderItemTitle}>{item.title}</Text>
        <Image source={item.img} style={styles.renderItemImage} />
        <Text style={styles.renderItemSubTitle}>{item.desc}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={items}
        keyExtractor={item => item.title}
        renderItem={({ item }: { item: Slide }) => renderItem(item)}
        sliderWidth={screenWidth}
        sliderHeight={screenHeight}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setDotIndex(index);
        }}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={dotIndex}
          dotStyle={styles.dotStyle}
        />
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            style={styles.paginationBackButton}
            activeOpacity={0.8}>
            <Text style={styles.paginationBackButtonText}>Home</Text>
            <Icon name="chevron-forward-outline" size={30} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  renderItemContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  renderItemImage: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  renderItemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: appColors.PRIMARY,
  },
  renderItemSubTitle: {
    fontSize: 16,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: appColors.PRIMARY,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  paginationBackButton: {
    flexDirection: 'row',
    backgroundColor: appColors.PRIMARY,
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationBackButtonText: {
    fontSize: 18,
    color: 'white',
  },
});
