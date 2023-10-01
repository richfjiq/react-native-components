import React, { FC, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context/theme/ThemeContext';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem: FC<Props> = ({ menuItem }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon name={menuItem.icon} color={colors.primary} size={25} />
          <Text style={[styles.text, { color: colors.text }]}>
            {menuItem.name}
          </Text>
        </View>
        <Icon name="chevron-forward-outline" color={colors.primary} size={25} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 19,
  },
});
