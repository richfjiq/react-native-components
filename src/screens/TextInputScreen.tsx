import React, { useContext } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomSwitch } from '../components/CustomSwitch';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useForm } from '../hooks/useForm';

export const TextInputScreen = () => {
  const { form, isSubscribed, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <KeyboardAwareScrollView
      // automaticallyAdjustsScrollIndicatorInsets
      automaticallyAdjustKeyboardInsets
      automaticallyAdjustContentInsets>
      <View style={styles.container}>
        <HeaderTitle title="TextInputs" />
        <TextInput
          style={[
            styles.input,
            { borderColor: colors.border, color: colors.text },
          ]}
          placeholder="Name"
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={value => onChange(value, 'name')}
          placeholderTextColor={colors.text}
        />

        <TextInput
          style={[
            styles.input,
            { borderColor: colors.border, color: colors.text },
          ]}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => onChange(value, 'email')}
          keyboardType="email-address"
          keyboardAppearance="dark"
          placeholderTextColor={colors.text}
        />
        <View style={styles.switchContainer}>
          <Text style={{ color: colors.text }}>Subscribe</Text>

          <CustomSwitch
            isOn={isSubscribed}
            onChange={value => onChange(value, 'isSubscribed')}
          />
        </View>

        <HeaderTitle title={JSON.stringify(form, null, 3)} />
        {/* <HeaderTitle title={JSON.stringify(form, null, 3)} /> */}

        <TextInput
          style={[
            styles.input,
            { borderColor: colors.border, color: colors.text },
          ]}
          placeholder="Phone"
          onChangeText={value => onChange(value, 'phone')}
          keyboardType="phone-pad"
          placeholderTextColor={colors.text}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  separator: {
    marginVertical: 10,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 25,
  },
  switchContainer: {
    marginTop: 35,
    marginBottom: -20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
