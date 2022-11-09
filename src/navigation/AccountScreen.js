import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Account from '../views/Account/Account';
import Settings from '../views/Settings/Settings';
const AccountScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
export default AccountScreen;
