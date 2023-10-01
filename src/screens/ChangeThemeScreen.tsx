import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Theme" />

      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={setLightTheme}>
          <Text style={styles.buttonText}>Light</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={setDarkTheme}>
          <Text style={styles.buttonText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
});
