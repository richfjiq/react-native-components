import React from 'react';
import { View, StyleSheet, Alert, Button } from 'react-native';
import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Title', 'This is the alert´s message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const showPrompt = () => {
    // Alert.prompt('Are you sure?');
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Alerts" />

      <View style={styles.separator}>
        <Button title="Show alert" onPress={showAlert} />
      </View>

      <View style={styles.separator}>
        <Button title="Show prompt" onPress={showPrompt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  separator: {
    marginVertical: 10,
  },
});
