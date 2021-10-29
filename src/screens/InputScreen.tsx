import React, { useContext } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'react-native';
import { Header } from '../components/Header';
import { globalStyles } from '../theme/appTheme';
import { Platform } from 'react-native';
import useForm from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext';

interface Form {
  name: string;
  email: string;
  phone: string;
  isSubscribe: boolean;
}

export const InputScreen = () => {
  const { onChange, state, isSubscribe } = useForm<Form>({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });
  const {
    theme: { colors, dividerColor },
  } = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={globalStyles.globalContainer}>
          <Header title="Inputs" />
          <TextInput
            style={{
              ...styles.inputs,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Ingrese su Nombre"
            placeholderTextColor={dividerColor}
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'email')}
            keyboardAppearance="default"
          />
          <TextInput
            style={{
              ...styles.inputs,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Ingrese su Email"
            placeholderTextColor={dividerColor}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />
          <View style={styles.switchRow}>
            <Text style={styles.switchText}>Subscribe</Text>
            <CustomSwitch
              isOn={isSubscribe}
              onChange={value => onChange(value, 'isSubscribe')}
            />
          </View>
          <View style={styles.headerContainer}>
            <Header title={JSON.stringify(state, null, 3)} />
          </View>
          <View style={styles.headerContainer}>
            <Header title={JSON.stringify(state, null, 3)} />
          </View>
          <TextInput
            style={{
              ...styles.inputs,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Ingrese su Telefono"
            placeholderTextColor={dividerColor}
            autoCorrect={false}
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <View style={styles.headerContainer}>
            <Header title={JSON.stringify(state, null, 3)} />
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
  switchRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
    alignSelf: 'flex-start',
  },
});
