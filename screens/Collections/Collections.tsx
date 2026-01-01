import { Octicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { StackParamList } from '@/App'
import {
  setCompletedFlashcards,
  setCompletedQuiz,
} from '@/store/slice/flashcards'
import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type ButtonProps = {
  collectionKey: string
}

export function Collections() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const flashcards = useSelector((state: State) => state.flashcards.items)

  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  useEffect(() => {
    // @ts-expect-error todo: needs to be fixed
    dispatch(loadData(t))
  }, [dispatch, t])

  return (
    <View style={styles.container}>
      {Object.keys(flashcards).map((key) => (
        <CollectionButton key={key} collectionKey={key} />
      ))}
    </View>
  )
}

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<StackParamList, 'collection'>,
  StackNavigationProp<StackParamList>
>

const CollectionButton = ({ collectionKey }: ButtonProps) => {
  const { t } = useTranslation()
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const {
    items: flashcards,
    completedFlashcards,
    completedQuiz,
  } = useSelector((state: State) => state.flashcards)
  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  const { name, translation, icon } = useMemo(
    () => flashcards[collectionKey],
    [flashcards, collectionKey],
  )

  const handlePress = useCallback(
    () =>
      navigation.navigate('collection', { name: t(name), key: collectionKey }),
    [name, collectionKey],
  )

  return (
    <TouchableOpacity style={styles.collection} onPress={handlePress}>
      <Text style={styles.collectionLabel}>{t(name)}</Text>
      <Text style={styles.collectionTranslation}>{translation}</Text>
      {icon && <Image style={styles.icon} source={icon} />}
      {completedFlashcards[collectionKey] && (
        <Octicons
          name="check-circle"
          size={24}
          color="#119179"
          style={[styles.completedIcon, styles.flashcards]}
        />
      )}
      {completedQuiz[collectionKey] && (
        <Octicons
          name="checklist"
          size={24}
          color="#119179"
          style={[styles.completedIcon, styles.quiz]}
        />
      )}
    </TouchableOpacity>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.spacing.l,
      paddingTop: theme.spacing.s,
    },
    collection: {
      position: 'relative',
      flexGrow: 1,
      flexBasis: '45%',
      minHeight: 150,
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.s,
      marginHorizontal: theme.spacing.xs,
      marginVertical: theme.spacing.xs,
      backgroundColor: theme.colors.secondary,
      borderRadius: 20,
      ...theme.shadows.basicShadow,
    },
    collectionLabel: {
      fontFamily: 'bold',
      color: theme.colors.text,
      fontSize: 16,
    },
    collectionTranslation: {
      fontFamily: 'medium',
      color: theme.colors.secondaryText,
      fontSize: 14,
    },
    icon: {
      position: 'absolute',
      bottom: theme.spacing.s,
      right: theme.spacing.s,
      width: 60,
      height: 60,
    },
    completedIcon: {
      position: 'absolute',
      bottom: theme.spacing.s,
    },
    flashcards: {
      left: 16,
    },
    quiz: {
      left: 48,
    },
  })

const loadData =
  (t: (key: string) => string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const completedFlashcards = await AsyncStorage.getItem(
        'completedFlashcards',
      )
      const completedQuiz = await AsyncStorage.getItem('completedQuiz')

      if (completedFlashcards) {
        const formattedCompleted = JSON.parse(completedFlashcards)
        dispatch(setCompletedFlashcards({ items: formattedCompleted }))
      }

      if (completedQuiz) {
        const formattedCompleted = JSON.parse(completedQuiz)
        dispatch(setCompletedQuiz({ items: formattedCompleted }))
      }
    } catch (e) {
      Alert.alert(t('collections.failedToLoad'), t('errors.tryAgainLater'))
    }
  }
