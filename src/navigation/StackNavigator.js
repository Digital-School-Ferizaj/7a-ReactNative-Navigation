import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/aboutScreen";

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

const screenOptionStyle = {
  headerStyle: { backgroundColor: '#f4511e' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

export {HomeStack, AboutStack};