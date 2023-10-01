import { View, StyleSheet, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const { isActive, isHungry, isHappy } = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={[styles.container, { top }]}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchContainer}>
        <Text style={[styles.infoText, { color: colors.text }]}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.infoText, { color: colors.text }]}>isActive</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.infoText, { color: colors.text }]}>isActive</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={[styles.infoText, { color: colors.text }]}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  infoText: {
    fontSize: 25,
  },
  switchContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
