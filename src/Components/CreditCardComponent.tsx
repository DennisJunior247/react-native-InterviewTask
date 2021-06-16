/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppText from '../Components/AppText';
import colors from '../Config/colors';

type Props = {
  cardName: string;
  cardNmb: string;
  expiry: string;
};

const CreditCard = ({cardName, cardNmb, expiry}: Props) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={['#B993D6', '#8CA6DB']}
      style={styles.card}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        imageStyle={{left: 150}}
        source={require('../Assets/Ellipse.png')}>
        <View style={styles.circleContainer}>
          <View style={{...styles.circle, backgroundColor: '#FFD25F'}} />
          <View style={{...styles.circle, right: 20}} />
        </View>
        <AppText
          color={colors.white}
          fontWeight={'normal'}
          fontSize={32}
          text={cardNmb}
          textStyle={{
            width: '100%',
            textAlign: 'center',
            letterSpacing: 2,
          }}
        />
        <View style={styles.cardNameContainer}>
          <AppText
            color={colors.white}
            fontWeight={'normal'}
            fontSize={20}
            text={cardName}
            textStyle={{textTransform: 'uppercase'}}
          />
          <AppText
            color={colors.white}
            fontWeight={'normal'}
            fontSize={20}
            text={expiry}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 270,
    borderRadius: 15,
    marginTop: 20,
  },
  circleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    padding: 30,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#F24E1E',
  },
  cardNameContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 30,
    marginTop: 20,
  },
});
