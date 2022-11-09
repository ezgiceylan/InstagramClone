import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../views/Home/Home';
import Message from '../views/Message/Message';
import Notification from '../views/Notification/Notification';
import Story from '../views/Story/Story';

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
export default HomeScreen;
