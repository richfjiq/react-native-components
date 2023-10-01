import React, { useContext } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation102Screen = () => {
  const { pan, panResponder } = useAnimation();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          styles.purpleBox,
          { backgroundColor: colors.primary },
        ]}
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
    width: 150,
    height: 150,
  },
});
