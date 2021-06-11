import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  text: string;
  fontWeight?: string;
  fontSize: string | number;
  color: string;
  TextStyle?: React.CSSProperties;
};

const AppText = ({text, color, fontSize, fontWeight, TextStyle}: Props) => {
  return (
    <View>
      <Text style={[styles(color, fontSize, fontWeight).textStyle, TextStyle]}>
        {text}
      </Text>
    </View>
  );
};

const styles = (color: string, fontSize: number | string, fontWeight: string) =>
  StyleSheet.create({
    textStyle: {
      color: color,
      fontWeight: fontWeight,
      fontSize:
        fontSize === 'large'
          ? 35
          : fontSize === 'medium'
          ? 18
          : fontSize === 'small'
          ? 15
          : fontSize,
    },
  });

export default AppText;
