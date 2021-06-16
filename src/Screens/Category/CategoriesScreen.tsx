import React from 'react';
import {
  FlatList,
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '../../Routes/AppNavigation/CategoryNavigator';
import AppText from '../../Components/AppText';
import ItemCard from '../../Components/CategoryCard';
import SearchBar from '../../Components/SearchBar';
import colors from '../../Config/colors';

type datatype = {
  title: string;
  quantity: number;
  image: ImageSourcePropType;
  id?: number;
}[];

const data: datatype = [
  {
    title: 'Vegetables',
    quantity: 43,
    image: require('../../Assets/categoryImages/Media.png'),
    id: 1,
  },
  {
    title: 'Vegetables',
    quantity: 43,
    image: require('../../Assets/categoryImages/Media1.png'),
    id: 2,
  },
  {
    title: 'Vegetables',
    quantity: 43,
    image: require('../../Assets/categoryImages/Media2.png'),
    id: 3,
  },
  {
    title: 'Vegetables',
    quantity: 43,
    image: require('../../Assets/categoryImages/Media3.png'),
    id: 4,
  },
  {
    title: 'Vegetables',
    quantity: 43,
    image: require('../../Assets/categoryImages/Media4.png'),
    id: 5,
  },
  {
    title: 'Vegetables',
    quantity: 43,
    image: require('../../Assets/categoryImages/Media5.png'),
    id: 6,
  },
];

type ProfileScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'CategoriesScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const CategoriesScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText
          color={colors.dark}
          fontWeight={'bold'}
          fontSize={35}
          text={'Categories'}
        />
        <View style={styles.searchBarContainer}>
          <SearchBar placeholder={'Search'} />
        </View>
      </View>
      <View style={styles.categoryItemsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <ItemCard
              title={item.title}
              quantity={item.quantity}
              image={item.image}
              onPress={() => navigation.navigate('CategoryListScreen')}
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // justifyContent: 'flex-end',
    // paddingBottom: 50,
  },
  searchBarContainer: {
    marginTop: 30,
  },
  categoryItemsContainer: {
    backgroundColor: colors.primary,
    flex: 3,
  },
});
