import HomeScreen from '@/app/(tabs)';
import SettingsScreen from '@/app/(tabs)/settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}