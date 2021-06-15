/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  Text,
  Switch,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from '../../Components/CustomButton';
import {MaterialIcon} from '../../Components/Icon';
import AppText from '../../Components/AppText';
import colors from '../../Config/colors';

type dataType = {
  title: string;
  iconName: string;
  text: string;
}[];

const data: dataType = [
  {
    title: 'Payment method',
    iconName: 'creditcard',
    text: '**** **** **** 4747',
  },
  {
    title: 'Delivery address',
    iconName: 'home',
    text: 'Alexandra Smith Cesu 31 k-2 5.st, SIA Chili.',
  },
];

const deliveryOptions: {title: string; icon: string}[] = [
  {title: "I'll pick it up my self", icon: 'walk'},
  {title: 'By Bike', icon: 'bike'},
  {title: 'By Drone', icon: 'airplane'},
];

const CheckOutScreen = () => {
  const [activeKey, setActiveKey] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleActive = (key: string) => {
    setActiveKey(key);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.paymentMethod}>
          {data.map(({iconName, title, text}) => (
            <View key={Math.random()}>
              <View style={styles.paymentMethodCard}>
                <AppText
                  text={title}
                  color={colors.dark}
                  fontSize={25}
                  fontWeight={'bold'}
                />
                <CustomButton
                  onPress={() => {}}
                  backgroundColor={colors.primary}
                  title={'change'}
                  ButtonStyle={{height: 40, padding: 0}}
                  width={'30%'}
                  textColor={colors.purple}
                />
              </View>
              <View style={styles.detailsContainer}>
                <MaterialIcon size="large" color="#2D0C57" name={iconName} />
                <View style={{width: '65%', marginTop: 10, marginLeft: 10}}>
                  <AppText
                    text={text}
                    color={colors.dark}
                    fontSize={18}
                    fontWeight={'normal'}
                    textStyle={{lineHeight: 30}}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.deliveryOption}>
          <View>
            <View style={styles.paymentMethodCard}>
              <AppText
                text={'Delivery options'}
                color={colors.dark}
                fontSize={25}
                fontWeight={'bold'}
              />
              <CustomButton
                onPress={() => {}}
                backgroundColor={colors.primary}
                title={'change'}
                ButtonStyle={{height: 40, padding: 0}}
                width={'30%'}
                textColor={colors.purple}
              />
            </View>
            <View>
              {deliveryOptions.map(({icon, title}) => (
                <TouchableWithoutFeedback
                  key={Math.random()}
                  onPress={() => handleActive(`${title}`)}>
                  <View style={styles.deliveryOptionCard}>
                    <Icon
                      name={icon}
                      size={27}
                      color={
                        activeKey && activeKey === title ? '#7203FF' : '#2D0C57'
                      }
                    />
                    <View style={styles.iconContainer}>
                      <AppText
                        text={title}
                        color={
                          activeKey && activeKey === title
                            ? '#7203FF'
                            : `${colors.grey}`
                        }
                        fontSize={20}
                        fontWeight={'normal'}
                        textStyle={{marginLeft: 20}}
                      />
                      <Text>
                        {activeKey === title && (
                          <Icon
                            name={'check'}
                            size={27}
                            color={'#7203FF'}
                            style={{alignSelf: 'flex-end'}}
                          />
                        )}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </View>
          <View style={styles.nonContactDelivery}>
            <AppText
              text={'Non-contact-delivery'}
              color={colors.dark}
              fontSize={25}
              fontWeight={'bold'}
            />
            <Switch
              trackColor={{false: '#767577', true: `${colors.purple}`}}
              thumbColor={isEnabled ? colors.purple : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <CustomButton
            onPress={() => {}}
            backgroundColor={colors.secondary}
            title={'Proceed'}
            ButtonStyle={{marginTop: 30}}
            width={'100%'}
            textColor={colors.white}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    marginHorizontal: 10,
  },
  paymentMethod: {
    flex: 1,
    // backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  paymentMethodCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    paddingTop: 15,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryOption: {
    flex: 1.8,
  },
  deliveryOptionCard: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    marginTop: 25,
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  nonContactDelivery: {
    marginTop: 10,
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
