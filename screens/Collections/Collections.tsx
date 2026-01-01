import { Octicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { usePostHog } from 'posthog-react-native'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Linking,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { StackParamList } from '@/App'
import {
  setCompletedFlashcards,
  setCompletedQuiz,
} from '@/store/slice/flashcards'
import { State } from '@/store/store'
import { CONTACT_EMAIL } from '@/utils/constants'
import { isSmallDevice } from '@/utils/theme'
import { Theming, theming } from '@/utils/theme'

type ButtonProps = {
  collectionKey: string
}

export function Collections() {
  const posthog = usePostHog()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const flashcards = useSelector((state: State) => state.flashcards.items)

  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  useEffect(() => {
    // @ts-expect-error todo: needs to be fixed
    dispatch(loadData(t))
  }, [dispatch, t])

  const handleEmailPress = () => {
    posthog.capture('email_click', { source: 'collections_footer' })

    const subject = t('collections.emailSubject')
    Linking.openURL(
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`,
    )
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      {Object.keys(flashcards).map((key) => (
        <CollectionButton key={key} collectionKey={key} />
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>{t('collections.footer')}</Text>
        <Text style={styles.emailLink} onPress={handleEmailPress}>
          {CONTACT_EMAIL}
        </Text>
      </View>
    </ScrollView>
  )
}

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<StackParamList, 'collection'>,
  StackNavigationProp<StackParamList>
>

const CollectionButton = ({ collectionKey }: ButtonProps) => {
  const posthog = usePostHog()
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

  const handlePress = useCallback(() => {
    posthog.capture('collection_card_click', { collection: t(name) })
    navigation.navigate('collection', { name: t(name), key: collectionKey })
  }, [name, collectionKey, posthog, t])

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
    scrollView: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingHorizontal: theme.spacing.l,
      paddingTop: theme.spacing.s,
      paddingBottom: isSmallDevice ? 60 : 90,
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
    footer: {
      width: '100%',
      marginTop: theme.spacing.xl,
      paddingVertical: theme.spacing.l,
      alignItems: 'center',
    },
    footerText: {
      fontFamily: 'regular',
      fontSize: 14,
      color: theme.colors.secondaryText,
      textAlign: 'center',
      lineHeight: 20,
    },
    emailLink: {
      color: theme.colors.accent,
      textDecorationLine: 'underline',
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
