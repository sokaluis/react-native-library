import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';
import { globalStyles } from '../theme/appTheme';

interface Switches {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchScreen = () => {
  const [state, setState] = useState<Switches>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { isActive, isHappy, isHungry } = state;

  const handleOnChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={globalStyles.globalContainer}>
      <Header title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => handleOnChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => handleOnChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => handleOnChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
