/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Text,
  ViewStyle,
} from 'react-native';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  title: string | JSX.Element;
  backgroundColor: string;
  width: string | number;
  textColor: string;
  ButtonStyle?: ViewStyle;
  icon?: JSX.Element;
}

const CustomButton = ({
  onPress,
  title,
  ButtonStyle,
  backgroundColor,
  width,
  textColor,
  icon,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles(backgroundColor, width).container, ButtonStyle]}
      onPress={onPress}>
      {icon && <Text style={{marginRight: 10}}>{icon}</Text>}
      <Text style={[styles().text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (backgroundColor?: string, width?: string | number) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      padding: 15,
      width: width,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    text: {
      fontSize: 20,
      textTransform: 'uppercase',
    },
  });
export default CustomButton;
