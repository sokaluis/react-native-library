import React, { useContext, useState } from 'react';
import { Platform, Switch, View } from 'react-native';
import { ThemeContext } from '../context/themeContext';

interface Props {
  isOn: boolean;
  onChange?: (isEnabled: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setisEnabled] = useState(isOn);
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const toggleSwitch = () => {
    setisEnabled(!isEnabled);
    onChange && onChange(!isEnabled);
  };
  return (
    <View>
      <Switch
        trackColor={{ false: '#d9d9dd', true: colors.primary }}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
