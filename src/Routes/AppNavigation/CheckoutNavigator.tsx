import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CreditCard from '../../Screens/Cart/CreditCard';
import CheckOutScreen from '../../Screens/Cart/CheckOutScreen';
import colors from '../../Config/colors';

export type StackParamList = {
  CheckOutScreen: undefined;
  CreditCard: undefined;
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
      <Stack.Screen
        name="CreditCard"
        component={CreditCard}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: colors.primary},
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
