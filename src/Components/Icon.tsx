import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};



export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};
export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const MaterialIcon = ({size, name, color}: IconProps) => (
  <Icon name={name} size={IconSizes[size]} color={color} />
);
export const Ico = ({size, name, color}: IconProps) => (
  <Icon name={name} size={IconSizes[size]} color={color} />
);
