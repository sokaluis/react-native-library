import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { globalStyles } from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={globalStyles.globalContainer}>
      <Header title="Modal Screen" />
      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.body}>
            <Text style={styles.text}>Modal</Text>
            <Text style={styles.text}>Cuerpo del Modal</Text>
            <Button title="Cerrar Modal" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    elevation: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
