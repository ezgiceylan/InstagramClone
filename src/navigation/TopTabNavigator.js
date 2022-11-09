import React from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ProfilPost from '../views/ProfilPost/ProfilPost';
import Reels from '../views/ProfilReels/ProfilReels';
import Tag from '../views/Tag/Tag';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'ProfilPost') {
            return <Image source={require('../../assets/images/grid.png')} />;
          }
          if (route.name === 'ProfilReels') {
            return <Image source={require('../../assets/images/video.png')} />;
          }
          if (route.name === 'Tag') {
            return <Image source={require('../../assets/images/avatar.png')} />;
          }
        },
        tabBarIndicatorStyle: {backgroundColor: 'white', height: 2},
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}>
      <Tab.Screen name="ProfilPost" component={ProfilPost} />
      <Tab.Screen name="ProfilReels" component={Reels} />
      <Tab.Screen name="Tag" component={Tag} />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
