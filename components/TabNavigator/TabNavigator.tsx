import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../../screens/Home/Home'
import { Settings } from '../../screens/Settings'
import { Saved } from '../../screens/Saved'

import { isAndroid, isSmallDevice, theming } from '../../utils/theme'
import { Collections } from '../../screens/Collections/Collections';
import { useSelector } from 'react-redux';
import { State } from '../../store/store';


export enum Screens {
    Home = 'Толи',
    Saved = 'Избранное',
    Settings = 'Настройки',
    Collections = 'Подборки'
}

export function TabNavigator() {
    const mode = useSelector((state: State) => state.theme.mode);
    const theme = theming(mode);

    // todo: fix mess with cross platform styles
    const tabStyles = {
        headerTitleStyle: {
            color: theme.colors.text,
            fontSize: 24,
            fontFamily: 'extraBold',
            letterSpacing: 0.5,
        },
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: theme.colors.background,
            ...isAndroid && {
                elevation: 5,
                shadowColor: mode === 'dark' ? theme.colors.background : '#66666D',
                shadowOffset: { height: -2, width: 0 },
                shadowOpacity: 0.50,
                shadowRadius: 80,
            },
        },
        headerShadowVisible: isAndroid ? true : false,
        tabBarStyle: {
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 5,
            shadowColor: mode === 'dark' ? theme.colors.background : '#66666D',
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.50,
            shadowRadius: 80,
            ...!isAndroid && {
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
            },
            height: isSmallDevice ? 60 : 90,
            paddingTop: 4,
            backgroundColor: theme.colors.secondary,
        },
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.secondaryText,
        tabBarLabelStyle: {
            fontFamily: 'extraBold',
            marginBottom: 4
        },
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
    
    const collectionOptions = {
        tabBarLabel: Screens.Collections,
        ...tabStyles,
        tabBarIcon: () => <Octicons name="repo" size={24} color={theme.colors.text} />
    }

    return (
        <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: isAndroid ? true : false }}>
            <Tab.Screen name={Screens.Home} component={Home} options={homeOptions} />
            <Tab.Screen name={Screens.Saved} component={Saved} options={savedOptions} />
            <Tab.Screen name={Screens.Collections} component={Collections} options={collectionOptions} />
            <Tab.Screen name={Screens.Settings} component={Settings} options={settingsOptions} />
        </Tab.Navigator>
    )
}