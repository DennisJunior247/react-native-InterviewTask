import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AppText from '../Components/AppText';
import SearchBar from '../Components/SearchBar';
import colors from '../Config/colors';

const CategoriesScreen = () => {
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
      <View style={styles.categoryItemsContainer} />
    </SafeAreaView>
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  searchBarContainer: {
    marginTop: 30,
  },
  categoryItemsContainer: {
    backgroundColor: 'green',
    flex: 3,
  },
});
