import React, { useState } from 'react';
import { Platform, Switch, View } from 'react-native';
import { appColors } from '../theme/appTheme';

interface Props {
  isOn: boolean;
  onChange?: (isEnabled: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setisEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setisEnabled(!isEnabled);
    onChange && onChange(!isEnabled);
  };
  return (
    <View>
      <Switch
        trackColor={{ false: '#d9d9dd', true: appColors.PRIMARY }}
        thumbColor={Platform.OS === 'android' ? appColors.PRIMARY : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
