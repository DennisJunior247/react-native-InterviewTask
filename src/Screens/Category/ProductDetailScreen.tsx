import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Text,
} from 'react-native';

import colors from '../../Config/colors';
import AppText from '../../Components/AppText';
import {MaterialIcon} from '../../Components/Icon';
import CustomButton from '../../Components/CustomButton';

const splashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../Assets/Bg1.png')}
      />
      <View style={styles.textContainer}>
        <View>
          <View>
            <AppText
              color={colors.dark}
              fontWeight={'bold'}
              fontSize={35}
              text={'Boston Lettuce'}
              textStyle={styles.title}
            />
            <Text style={styles.price}>
              1.10
              <Text style={styles.amount}>€ / piece</Text>
            </Text>
            <AppText
              color={colors.secondary}
              fontWeight={'bold'}
              fontSize={20}
              text={'~150 gr / piece'}
            />
          </View>
          <View>
            <AppText
              color={colors.dark}
              fontWeight={'bold'}
              fontSize={25}
              text={'Spain'}
              textStyle={styles.title}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                Lettuce is an annual plant of the daisy family, Asteraceae. It
                is most often grown as a leaf vegetable, but sometimes for its
                stem and seeds. Lettuce is most often used for salads, although
                it is also seen in other kinds of food, such as soups,
                sandwiches and wraps; it can also be grilled.
              </Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <CustomButton
              onPress={() => {}}
              backgroundColor={colors.primary}
              title={
                <MaterialIcon size="large" color="#9586A8" name="hearto" />
              }
              ButtonStyle={styles.likeBtn}
              width={'30%'}
              textColor={colors.grey}
            />
            <CustomButton
              onPress={() => {}}
              backgroundColor={colors.secondary}
              title={'add to cart'}
              ButtonStyle={styles.btn}
              width={'60%'}
              textColor={colors.white}
              icon={
                <MaterialIcon
                  size="large"
                  color="#FFFFFF"
                  name="shoppingcart"
                />
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default splashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  background: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1.8,
    top: -30,
    backgroundColor: colors.primary,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 30,
  },
  price: {
    color: colors.dark,
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  amount: {
    color: colors.grey,
    fontSize: 20,
    fontWeight: 'normal',
  },
  descriptionContainer: {
    marginTop: 10,
  },
  description: {
    color: colors.grey,
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
  },
  likeBtn: {
    height: 50,
    borderRadius: 10,
    borderColor: colors.grey,
    elevation: 1,
    borderWidth: 0.5,
    padding: 0,
  },
  btn: {
    borderRadius: 10,
  },
});
