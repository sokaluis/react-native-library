import React from 'react';
import { Alert, Button, View, Platform } from 'react-native';
import { Header } from '../components/Header';
import { globalStyles } from '../theme/appTheme';

export const AlertsScreen = () => {
  const createButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'Este es el mensaje de la Alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('On Dismiss'),
      },
    );
  const createButtonPrompt = () =>
    Alert.prompt(
      'Estas Seguro',
      'Esta accion no se puede revertir',
      (valor: string) => console.log('info', valor),
      'plain-text',
      'Hola Mundo',
      'number-pad',
    );
  return (
    <View style={globalStyles.globalContainer}>
      <Header title="Alerts" />
      <Button title="Mostrar Alerta" onPress={createButtonAlert} />
      {Platform.OS === 'ios' && (
        <Button title="Mostrar Prompt" onPress={createButtonPrompt} />
      )}
    </View>
  );
};
