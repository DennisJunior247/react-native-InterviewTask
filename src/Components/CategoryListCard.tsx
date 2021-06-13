/* eslint-disable react-native/no-inline-styles */
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
import CustomButton from './CustomButton';
import {MaterialIcon} from './Icon';

type PropsType = {
  title: string;
  price: number;
  image: ImageSourcePropType;
  id?: number;
  onPress: (event: GestureResponderEvent) => void;
};

const CategoryCard = ({title, price, image, onPress}: PropsType) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.imageBackground} />
        </View>
        <View style={styles.asideContainer}>
          <View style={styles.textContainer}>
            <AppText
              text={title}
              color={colors.dark}
              fontSize={20}
              fontWeight={'bold'}
            />
            <Text style={styles.price}>
              {price}
              <Text style={styles.amount}>€ / piece</Text>
            </Text>
          </View>
          <View style={styles.chartBtnContainer}>
            <CustomButton
              onPress={() => {}}
              backgroundColor={colors.primary}
              title={
                <MaterialIcon size="large" color="#9586A8" name="hearto" />
              }
              ButtonStyle={{
                height: 50,
                borderRadius: 10,
                borderColor: colors.grey,
                elevation: 1,
                borderWidth: 0.5,
                padding: 0,
              }}
              width={'40%'}
              textColor={colors.grey}
            />
            <CustomButton
              onPress={() => {}}
              backgroundColor={colors.secondary}
              title={
                <MaterialIcon
                  size="large"
                  color="#FFFFFF"
                  name="shoppingcart"
                />
              }
              ButtonStyle={{height: 50, borderRadius: 10}}
              width={'40%'}
              textColor={colors.grey}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    marginBottom: 22,
  },
  imageContainer: {
    width: '50%',
    height: '100%',
    paddingTop: 10,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
  },
  asideContainer: {
    width: '50%',
  },
  textContainer: {
    height: '50%',
    padding: 20,
  },
  price: {
    color: colors.dark,
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
  },
  amount: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: 'normal',
  },
  chartBtnContainer: {
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
