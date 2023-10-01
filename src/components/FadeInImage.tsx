import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';

import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

export const FadeInImage: FC<Props> = ({ uri, style }) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator style={styles.loader} color="#5856D6" size={30} />
      )}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={[style, { opacity }]}
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
  imageDimensions: {
    width: '100%',
    height: 400,
  },
  loader: {
    position: 'absolute',
  },
});
