import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../Config/colors';

interface Props {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const OptionsList = ({title, onPress}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.textBox, styles.inactive]}>
        <Text style={styles.colorInActive}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OptionsList;

const styles = StyleSheet.create({
  textBox: {
    height: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 1,
  },
  active: {
    backgroundColor: '#E2CBFF',
  },
  inactive: {
    backgroundColor: colors.white,
  },
  colorActive: {
    color: '#6C0EE4',
  },
  colorInActive: {
    color: colors.grey,
  },
});
