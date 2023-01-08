import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/Home';
import { Settings } from '../../screens/Settings';
import { Saved } from '../../screens/Saved';

import { Feather } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{tabBarLabel: 'home', tabBarIcon: () => <Feather name="home" size={24} color="black" />}} />
            <Tab.Screen name="saved" component={Saved} options={{tabBarLabel: 'saved', tabBarIcon: () => <Feather name="star" size={24} color="black" />}} />
            <Tab.Screen name="settings" component={Settings} options={{tabBarLabel: 'settings', tabBarIcon: () => <Feather name="settings" size={24} color="black" />}} />
        </Tab.Navigator>
    )
}