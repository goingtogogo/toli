import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../../screens/Home/Home'
import { Settings } from '../../screens/Settings'
import { Saved } from '../../screens/Saved'

import { theme } from '../../utils/theme'


export enum Screens {
    Home = 'Толи',
    Saved = 'Избранное',
    Settings = 'Настройки'
}


const tabStyles = {
    headerTitleStyle: {
        color: theme.colors.text,
        fontSize: 24,
        fontFamily: 'extraBold',
        letterSpacing: 0.5
    },
    headerStyle: {
        backgroundColor: theme.colors.background,
    },
    headerShadowVisible: false,
    tabBarStyle: {
        borderTopWidth: 0,
        shadowColor: '#66666D',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.50,
        shadowRadius: 80,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 90,
    },
    tabBarActiveTintColor: theme.colors.text,
    tabBarInactiveTintColor: theme.colors.secondaryText,
    tabBarLabelStyle: {
        fontFamily: 'extraBold'
    }
}

const Tab = createBottomTabNavigator()

const homeOptions = {
    tabBarLabel: Screens.Home,
    ...tabStyles,
    tabBarIcon: () => <Octicons name="home" size={24} color={theme.colors.text} />
}

const savedOptions = {
    tabBarLabel: Screens.Saved,
    ...tabStyles,
    tabBarIcon: () => <Octicons name="star" size={24} color={theme.colors.text} />
}

const settingsOptions = {
    tabBarLabel: Screens.Settings,
    ...tabStyles,
    tabBarIcon: () => <Octicons name="gear" size={24} color={theme.colors.text} />
}

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={Screens.Home} component={Home} options={homeOptions} />
            <Tab.Screen name={Screens.Saved} component={Saved} options={savedOptions} />
            <Tab.Screen name={Screens.Settings} component={Settings} options={settingsOptions} />
        </Tab.Navigator>
    )
}