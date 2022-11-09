import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ShopAction from '../views/ShopAction/ShopAction';
import Store from '../views/Store/Store';
const Stack = createNativeStackNavigator();
const StoreScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="ShopAction " component={ShopAction} />
    </Stack.Navigator>
  );
};
export default StoreScreen;
