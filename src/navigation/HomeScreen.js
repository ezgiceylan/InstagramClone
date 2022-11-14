import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../views/Home/Home';
import Notification from '../views/Notification/Notification';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeScreen;
