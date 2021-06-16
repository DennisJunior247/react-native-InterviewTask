/* eslint-disable react-native/no-inline-styles */
import React, {SetStateAction} from 'react';
import {StyleSheet, TextInput, View, ViewStyle, Text} from 'react-native';

import colors from '../Config/colors';
import {MaterialIcon} from '../Components/Icon';

type Props = {
  InputStyle?: ViewStyle;
  onChangeText: (text: SetStateAction<string>) => void;
  value?: string;
  keyboardType?: 'numeric' | 'default';
  text: string | number;
  icon?: 'logo' | 'icon';
};

const Index = ({onChangeText, value, keyboardType, text, icon}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
        />
        {icon && icon === 'logo' ? (
          <View style={styles.sideContainer}>
            <View style={{...styles.circle, backgroundColor: '#FFD25F'}} />
            <View style={{...styles.circle, left: 10}} />
          </View>
        ) : (
          <View style={styles.sideContainer}>
            {icon && (
              <MaterialIcon size="large" color="#2D0C57" name={'creditcard'} />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },
  text: {
    padding: 10,
    fontSize: 18,
    color: colors.grey,
    textTransform: 'capitalize',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    borderColor: '#D9D0E3',
    borderWidth: 2,
    borderRadius: 10,
  },
  input: {
    width: '80%',
    height: 40,
    fontSize: 17,
    color: '#2D0C57',
    padding: 10,
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  sideContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 5,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: '#F24E1E',
    position: 'absolute',
  },
});
