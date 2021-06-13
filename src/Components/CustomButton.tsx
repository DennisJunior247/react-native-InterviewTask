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
  title: string;
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
      <Text style={[styles().text, {color: textColor}]}>
        {icon &&<Text></Text>}
        {title}
      </Text>
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
    },
    text: {
      fontSize: 20,
      textTransform: 'uppercase',
    },
  });
export default CustomButton;
