import React, { FC, useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch: FC<Props> = ({ isOn, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{ false: colors.card, true: colors.primary }}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      ios_backgroundColor={colors.card}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
