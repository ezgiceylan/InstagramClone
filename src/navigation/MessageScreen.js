import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Message from '../views/Message/Message';
const Stack = createNativeStackNavigator();
const MessageScreen = () => {
  return (
    <Stack.Screen
      name="Message"
      component={Message}
      options={{
        headerBackTitle: 'ezgiceylan',
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerRight: () => {
          return <Feather name="edit" size={24} color="white" />;
        },
        headerTintColor: 'white',
      }}
    />
  );
};
export default MessageScreen;
