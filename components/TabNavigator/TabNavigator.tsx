import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../screens/Home'
import { Settings } from '../../screens/Settings'
import { Saved } from '../../screens/Saved'

import { Feather } from '@expo/vector-icons'
import { theme } from '../../utils/theme'


export enum Screens {
    Home = 'home',
    Saved = 'saved',
    Settings = 'settings'
}

export enum ActiveTab {
    Info = 'info',
    Banners = 'banners',
    Signals = 'signals',
    Neighbours = 'neighbours',
    Domains = 'domains',
    Abuses = 'abuses'
}

const Tab = createBottomTabNavigator()

const homeOptions = {
    tabBarLabel: Screens.Home,
    headerTitleStyle: { fontFamily: 'bold', color: theme.colors.background },
    headerStyle: {
        backgroundColor: theme.colors.primary
    },
    tabBarIcon: () => <Feather name="home" size={24} color="black" />
}

const savedOptions = {
    tabBarLabel: Screens.Saved,
    headerTitleStyle: { fontFamily: 'bold' },
    tabBarIcon: () => <Feather name="star" size={24} color="black" />
}

const settingsOptions = {
    tabBarLabel: Screens.Settings,
    headerTitleStyle: { fontFamily: 'bold' },
    tabBarIcon: () => <Feather name="settings" size={24} color="black" />
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