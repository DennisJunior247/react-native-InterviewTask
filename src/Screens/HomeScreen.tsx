import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Image,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import AppText from '../Components/AppText';
import CustomButton from '../Components/CustomButton';
import colors from '../Config/colors';

import {RootStackParamList} from '../Routes/HomeNavigator';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ScreenNavigationProp;
};

const splashScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.logoContainer}
        source={require('../Assets/BG.png')}>
        <View>
          <Image style={styles.logo} source={require('../Assets/LOGO.png')} />
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        <View style={styles.iconBox}>
          <Image source={require('../Assets/Vector.png')} />
        </View>
        <View>
          <AppText
            color={colors.dark}
            fontWeight={'bold'}
            fontSize={35}
            text={'Non-Contact \n Deliveries'}
            textStyle={styles.title}
          />
          <AppText
            color={colors.grey}
            fontWeight={'normal'}
            fontSize={20}
            text={
              'When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door'
            }
            textStyle={styles.subtitle}
          />
        </View>
        <CustomButton
          onPress={() => navigation.navigate('AppNavigation')}
          backgroundColor={colors.secondary}
          title={'order now'}
          ButtonStyle={styles.btn}
          width={'90%'}
          textColor={colors.white}
        />
        <CustomButton
          onPress={() => {}}
          backgroundColor={colors.primary}
          title={'dismiss'}
          ButtonStyle={styles.btn}
          width={'90%'}
          textColor={colors.grey}
        />
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
  logoContainer: {
    flex: 1,
    backgroundColor: colors.purple,
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
  },
  iconBox: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    elevation: 0.5,
    marginTop: 20,
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    padding: 18,
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 30,
  },
  btn: {
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});
