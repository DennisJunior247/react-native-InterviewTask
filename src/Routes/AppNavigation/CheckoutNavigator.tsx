import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import CategoryListScreen from '../../Screens/CategoryListScreen';
import CheckOutScreen from '../../Screens/CheckOutScreen';

export type StackParamList = {
  CheckOutScreen: undefined;
  // CategoryListScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <Stack.Navigator initialRouteName="CheckOutScreen">
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{headerTitle: 'Checkout', headerTitleAlign: 'center'}}
      />
      {/* <Stack.Screen
        name="CategoryListScreen"
        component={CategoryListScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default App;
