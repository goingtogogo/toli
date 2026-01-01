import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, Alert } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-gesture-handler'
import { Provider, useSelector } from 'react-redux'
import './utils/i18n/i18n'

import { TabNavigator } from '@/components/TabNavigator/TabNavigator'
import { About } from '@/screens/About'
import { Collection } from '@/screens/Collections/Collection/Collection'
import { Flashcards } from '@/screens/Collections/Flashcards/Flashcards'
import { Navigation } from '@/screens/Collections/Navigation/Navigation'
import { Quiz } from '@/screens/Collections/Quiz/Quiz'
import { AddWord } from '@/screens/Saved/AddWord'
import { cards } from '@/store/slice/flashcards/content'
import store, { State } from '@/store/store'
import { loadFonts } from '@/utils/loadFonts'
import { theming } from '@/utils/theme'

SplashScreen.preventAutoHideAsync()

export type StackParamList = {
  main: undefined
  about: undefined
  settings: undefined
  add: undefined
  collection: { name: string; key: keyof typeof cards }
  flashcards: { name: string; key: keyof typeof cards }
  quiz: { name: string; key: keyof typeof cards }
  navigation: {
    name: string
    key: keyof typeof cards
    screen: 'quiz' | 'flashcards'
    swipedLeft?: number
    swipedRight?: number
  }
}

const Stack = createNativeStackNavigator<StackParamList>()

function App() {
  const { t } = useTranslation()
  const [appIsLoaded, setAppIsLoaded] = useState(false)
  const mode = useSelector((state: State) => state.theme.mode)
  const theme = theming(mode)

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFonts()
      } catch (e) {
        Alert.alert(t('errors.somethingWentWrong'), t('errors.tryAgainLater'))
      } finally {
        setAppIsLoaded(true)
      }
    }

    prepare()
  }, [])

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [appIsLoaded])

  const screenOptions = {
    headerTitle: t('headers.translator'),
    headerShown: false,
  }

  const commonStyles = React.useMemo(
    () => ({
      headerTitleStyle: {
        color: theme.colors.text,
        fontSize: 24,
        fontFamily: 'extraBold',
        letterSpacing: 0.5,
      },
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTitleAlign: 'center' as const,
      headerShadowVisible: false,
    }),
    [theme],
  )

  const aboutOptions = {
    headerTitle: t('headers.about'),
    ...commonStyles,
    headerBackTitle: '',
  }

  const addOptions = {
    headerTitle: t('headers.addWord'),
    ...commonStyles,
    headerBackTitle: '',
  }

  const collectionOptions = ({
    route: {
      params: { name, key },
    },
    navigation,
  }: {
    route: RouteProp<StackParamList, 'collection'>
    navigation: NativeStackNavigationProp<StackParamList, 'navigation'>
  }) => ({
    headerTitle: name,
    ...commonStyles,
    headerBackTitle: '',
    headerRight: () => (
      <MaterialCommunityIcons
        name="cards-outline"
        size={28}
        color="#3478f6"
        onPress={() =>
          navigation.navigate('flashcards', {
            name,
            key: key as keyof typeof cards,
          })
        }
      />
    ),
  })

  const flashcardsOptions = ({
    route,
  }: {
    route: RouteProp<StackParamList, 'flashcards'>
  }) => ({
    headerTitle: route.params.name,
    ...commonStyles,
    headerBackTitle: '',
  })

  const quizOptions = ({
    route,
  }: {
    route: RouteProp<StackParamList, 'quiz'>
  }) => ({
    headerTitle: route.params.name,
    ...commonStyles,
    headerBackTitle: '',
  })

  const navigationOptions = ({
    navigation,
  }: {
    navigation: NativeStackNavigationProp<StackParamList, 'navigation'>
  }) => ({
    headerTitle: '',
    ...commonStyles,
    headerBackVisible: false,
    headerRight: () => (
      <Octicons
        name="x"
        size={24}
        color="#3478f6"
        onPress={() => navigation.popToTop()}
      />
    ),
  })

  if (!appIsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <View onLayout={onLayout} style={styles.container}>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen
                name="main"
                component={TabNavigator}
                options={screenOptions}
              />
              <Stack.Screen
                name="add"
                component={AddWord}
                options={addOptions}
              />
              <Stack.Screen
                name="about"
                component={About}
                options={aboutOptions}
              />
              <Stack.Screen
                name="collection"
                component={Collection}
                options={collectionOptions}
              />
              <Stack.Screen
                name="flashcards"
                component={Flashcards}
                options={flashcardsOptions}
              />
              <Stack.Screen
                name="quiz"
                component={Quiz}
                options={quizOptions}
              />
              <Stack.Screen
                name="navigation"
                component={Navigation}
                options={navigationOptions}
              />
            </Stack.Group>
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
