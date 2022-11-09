import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfilEdit from '../views/ProfileEdit/ProfilEdit';
import OnboardingScreen from '../views/OnboardingScreen/OnboardingScreen';
import CategoryScreen from '../views/OnboardingScreen/CategoryScreen';
const EditProfile = () => {
  const Stack = createNativeStackNavigator();
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
