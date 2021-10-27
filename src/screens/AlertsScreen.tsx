import React from 'react';
import { Alert, Button, View, Platform } from 'react-native';
import prompt from 'react-native-prompt-android';
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
  const createButtonPromptIOS = () =>
    Alert.prompt(
      'Estas Seguro',
      'Esta accion no se puede revertir',
      (valor: string) => console.log('info', valor),
      'plain-text',
      'Hola Mundo',
      'number-pad',
    );
  const createButtonPromptAnd = () =>
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
  return (
    <View style={globalStyles.globalContainer}>
      <Header title="Alerts" />
      <Button title="Mostrar Alerta" onPress={createButtonAlert} />
      <Button
        title="Mostrar Prompt"
        onPress={() => {
          Platform.OS === 'ios'
            ? createButtonPromptIOS()
            : createButtonPromptAnd;
        }}
      />
    </View>
  );
};
