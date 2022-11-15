import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Message from '../views/Message/Message';
import SingleMessage from '../views/Message/SingleMessage';

const Stack = createNativeStackNavigator();

const MessageScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="SingleMessage" component={SingleMessage} />
    </Stack.Navigator>
  );
};
export default MessageScreen;
