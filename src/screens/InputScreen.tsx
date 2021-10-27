import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Header } from '../components/Header';
import { globalStyles } from '../theme/appTheme';
import { Platform } from 'react-native';

interface Form {
  name: string;
  email: string;
  phone: string;
}

export const InputScreen = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    phone: '',
  });
  const handleOnChange = (value: string, field: keyof typeof form) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={globalStyles.globalContainer}>
          <Header title="Inputs" />
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese su Nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => handleOnChange(value, 'name')}
            keyboardAppearance="default"
          />
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese su Email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => handleOnChange(value, 'email')}
            keyboardType="email-address"
          />
          <View style={styles.headerContainer}>
            <Header title={JSON.stringify(form, null, 3)} />
          </View>
          <View style={styles.headerContainer}>
            <Header title={JSON.stringify(form, null, 3)} />
          </View>
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese su Telefono"
            autoCorrect={false}
            onChangeText={value => handleOnChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <View style={styles.headerContainer}>
            <Header title={JSON.stringify(form, null, 3)} />
          </View>
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputs: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  headerContainer: {
    alignSelf: 'flex-start',
  },
  spacer: {
    height: 100,
  },
});
