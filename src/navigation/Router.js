import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Comment from '../views/Comment/Comment';
import Login from '../views/Login/Login';
import Story from '../views/Story/Story';

import BottomTab from './BottomTab';
import EditProfile from './EditProfile';
import MessageScreen from './MessageScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Comment" component={Comment} />
      <Stack.Screen
        name="Story"
        component={Story}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};
export default Router;
