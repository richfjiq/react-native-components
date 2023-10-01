import { View, StyleSheet, Button, Modal, Text } from 'react-native';
import React, { useState } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Open Modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="slide" visible={isVisible} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.bodyModal}>
            <Text>Modal</Text>
            <Text>Modal's body</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyModal: {
    backgroundColor: 'white',
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
});
