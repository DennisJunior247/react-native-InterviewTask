import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import AppNavigation from './AppNavigation/TabNavigator';

export type RootStackParamList = {
  Home: undefined;
  AppNavigation: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;
