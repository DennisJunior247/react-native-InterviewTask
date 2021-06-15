import React from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';

type Props<T> = {
  InputStyle: ViewStyle;
  onChangeText: (e: string) => void;
  placeholder: string;
  value: T;
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
