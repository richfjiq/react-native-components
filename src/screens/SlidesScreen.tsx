import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/theme/ThemeContext';

const { width: screenWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({ navigation }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { fadeIn, fadeOut, opacity } = useAnimation();
  const isVisible = useRef(false);
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={[styles.itemContainer, { backgroundColor: colors.background }]}>
        <Image source={item.img} style={styles.image} />
        <Text style={[styles.title, { color: colors.primary }]}>
          {item.title}
        </Text>
        <Text style={[styles.subTitle, { color: colors.text }]}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          } else {
            isVisible.current = false;
            fadeOut(100);
          }
        }}
      />

      <View style={styles.buttons}>
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            disabled={activeIndex === 2 ? false : true}
            style={[
              styles.buttonContainer,
              { backgroundColor: colors.primary },
            ]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home' as any)}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
        </Animated.View>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={[styles.dot, { backgroundColor: colors.primary }]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
