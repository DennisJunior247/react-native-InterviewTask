import React from 'react';
import {
  FlatList,
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import AppText from '../Components/AppText';
// import ItemCard from '../Components/CategoryListCard';
import OptionList from '../Components/OptionList';
import SearchBar from '../Components/SearchBar';
import colors from '../Config/colors';

type datatype = {
  title: string;
  price: number;
  image: ImageSourcePropType;
  id?: number;
}[];

const data: datatype = [
  {
    title: 'Boston Lettuce ',
    price: 1.1,
    image: require('../Assets/Media.png'),
    id: 1,
  },
  {
    title: 'Purple Cauliflower',
    price: 1.85,
    image: require('../Assets/Media1.png'),
    id: 2,
  },
  {
    title: 'Savoy Cabbage',
    price: 1.45,
    image: require('../Assets/Media2.png'),
    id: 3,
  },
];

const optionsData: {title: string; id: number}[] = [
  {id: 1, title: 'Сabbage and lettuce (14)'},
  {id: 2, title: 'Сucumbers and tomatoes (10)'},
  {id: 3, title: 'Oinons and garlic (8)'},
];
const secondOptionsData: {title: string; id: number}[] = [
  {id: 4, title: 'Oinons and garlic (8)'},
  {id: 5, title: 'Peppers (7)'},
  {id: 6, title: 'Potatoes and carrots (4)'},
  {id: 2, title: 'Сucumbers and tomatoes (10)'},
];

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.bgImage}
          source={require('../Assets/Vector2.png')}
        />
        <AppText
          color={colors.dark}
          fontWeight={'bold'}
          fontSize={35}
          text={'Vegetables'}
        />
        <View style={styles.searchBarContainer}>
          <SearchBar placeholder={'Search'} />
        </View>
      </View>
      <View style={styles.optiosContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={optionsData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <OptionList title={item.title} onPress={() => {}} />
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={secondOptionsData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <OptionList title={item.title} onPress={() => {}} />
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
      <View style={styles.categoryItemsContainer}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => (
            <ItemCard
              title={item.title}
              quantity={item.quantity}
              image={item.image}
              onPress={() => {}}
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        /> */}
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
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: colors.primary,
  },
  bgImage: {
    position: 'absolute',
    top: -6,
    right: -12,
    zIndex: -1000,
  },
  searchBarContainer: {
    marginTop: 30,
  },
  optiosContainer: {
    flex: 0.7,
  },
  categoryItemsContainer: {
    backgroundColor: 'green',
    flex: 3,
  },
  seperator: {
    width: 10,
    backgroundColor: colors.primary,
  },
});
