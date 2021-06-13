import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  ImageSourcePropType,
  Image,
} from 'react-native';
import colors from '../Config/colors';
import AppText from './AppText';

type PropsType = {
  title: string;
  quantity: number;
  image: ImageSourcePropType;
  id?: number;
  onPress: (event: GestureResponderEvent) => void;
};

const CategoryCard = ({title, quantity, image, onPress}: PropsType) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.imageBackground} />
        </View>
        <View style={styles.textContainer}>
          <AppText
            text={title}
            color={colors.dark}
            fontSize={20}
            fontWeight={'bold'}
          />
          <Text>({quantity})</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 195,
    height: 240,
    backgroundColor: colors.primary,
    borderRadius: 13,
    marginRight: 20,
    borderColor: '#D9D0E3',
    borderWidth: 1,
    elevation: 1,
    marginBottom: 40,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  textContainer: {
    width: '100%',
    height: '30%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
