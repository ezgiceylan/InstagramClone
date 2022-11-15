import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoryScreen from '../views/OnboardingScreen/CategoryScreen';
import OnboardingScreen from '../views/OnboardingScreen/OnboardingScreen';
import ProfilEdit from '../views/ProfileEdit/ProfilEdit';

const Stack = createNativeStackNavigator();

const EditProfile = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ProfilEdit"
        component={ProfilEdit}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};
export default EditProfile;
