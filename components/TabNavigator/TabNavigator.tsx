import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { Home } from '../../screens/Home/Home'
import { Saved } from '../../screens/Saved/Saved'
import { Settings } from '../../screens/Settings'

import { Collections } from '@/screens/Collections/Collections'
import { State } from '@/store/store'
import { isAndroid, isSmallDevice, theming } from '@/utils/theme'

export enum Screens {
  Home = 'Толи',
  Saved = 'Избранное',
  Settings = 'Настройки',
  Collections = 'Подборки',
}

export function TabNavigator() {
  const { t } = useTranslation()
  const mode = useSelector((state: State) => state.theme.mode)
  const theme = theming(mode)

  // todo: fix mess with cross platform styles
  const tabStyles = {
    headerTitleStyle: {
      color: theme.colors.text,
      fontSize: 24,
      fontFamily: 'extraBold',
      letterSpacing: 0.5,
    },
    headerTitleAlign: 'center' as const,
    headerStyle: {
      backgroundColor: theme.colors.background,
      ...(isAndroid && {
        elevation: 5,
        shadowColor: mode === 'dark' ? theme.colors.background : '#66666D',
        shadowOffset: { height: -2, width: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 80,
      }),
    },
    headerShadowVisible: isAndroid ? true : false,
    tabBarStyle: {
      position: 'absolute' as const,
      borderTopWidth: 0,
      elevation: 5,
      shadowColor: mode === 'dark' ? theme.colors.background : '#66666D',
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 80,
      ...(!isAndroid && {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }),
      height: isSmallDevice ? 60 : 90,
      paddingTop: 4,
      backgroundColor: theme.colors.secondary,
    },
    tabBarActiveTintColor: theme.colors.text,
    tabBarInactiveTintColor: theme.colors.secondaryText,
    tabBarLabelStyle: {
      fontFamily: 'extraBold',
      marginBottom: 4,
    },
  }

  const Tab = createBottomTabNavigator()

  const homeOptions = {
    headerTitle: t('tabs.home'),
    tabBarLabel: t('tabs.home'),
    ...tabStyles,
    tabBarIcon: () => (
      <Octicons name="home" size={24} color={theme.colors.text} />
    ),
  }

  const savedOptions = ({ navigation }: { navigation }) => ({
    headerTitle: t('tabs.saved'),
    tabBarLabel: t('tabs.saved'),
    ...tabStyles,
    tabBarIcon: () => (
      <Octicons name="star" size={24} color={theme.colors.text} />
    ),
    headerRight: () => (
      <MaterialCommunityIcons
        name="pencil-plus"
        size={32}
        color="#3478f6"
        style={styles.pencil}
        onPress={() => navigation.navigate('add')}
      />
    ),
  })

  const settingsOptions = {
    headerTitle: t('tabs.settings'),
    tabBarLabel: t('tabs.settings'),
    ...tabStyles,
    tabBarIcon: () => (
      <Octicons name="gear" size={24} color={theme.colors.text} />
    ),
  }

  const collectionOptions = {
    headerTitle: t('tabs.collections'),
    tabBarLabel: t('tabs.collections'),
    ...tabStyles,
    tabBarIcon: () => (
      <Octicons name="repo" size={24} color={theme.colors.text} />
    ),
  }

  return (
    <Tab.Navigator
      screenOptions={{ tabBarHideOnKeyboard: isAndroid ? true : false }}
    >
      <Tab.Screen name={Screens.Home} component={Home} options={homeOptions} />
      <Tab.Screen
        name={Screens.Saved}
        component={Saved}
        options={savedOptions}
      />
      <Tab.Screen
        name={Screens.Collections}
        component={Collections}
        options={collectionOptions}
      />
      <Tab.Screen
        name={Screens.Settings}
        component={Settings}
        options={settingsOptions}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  pencil: {
    marginRight: 18,
  },
})
