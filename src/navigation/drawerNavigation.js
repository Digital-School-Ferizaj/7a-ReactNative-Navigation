import React from 'react';
import {HomeStack, AboutStack} from './StackNavigator';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {HomeTabNavigator, AboutTabNavigator} from './TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen name="About" component={AboutTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;