import React from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';

type Props = {
  InputStyle: ViewStyle;
  onChangeText: (e: string) => void;
  placeholder: string;
  value: string;
};

const Index = ({onChangeText, placeholder, value}: Props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  input: {},
});
