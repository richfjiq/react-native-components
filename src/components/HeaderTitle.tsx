import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTitle: FC<Props> = ({ title }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top }}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
