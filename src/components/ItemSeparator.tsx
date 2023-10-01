import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return <View style={[styles.separator, { borderColor: colors.text }]} />;
};
const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    opacity: 0.4,
  },
});
