import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, SafeAreaView, FlatList, Alert } from 'react-native'
import { useSelector } from 'react-redux'

import { StackParamList } from '@/App'
import { Button } from '@/components/Button/Button'
import { TranslationResult } from '@/components/TranslationResult/TranslationResult'
import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type Props = NativeStackScreenProps<StackParamList, 'collection'>

export function Collection(props: Props) {
  const { t, i18n } = useTranslation()
  const {
    route: {
      params: { key, name },
    },
    navigation,
  } = props

  const flashcards = useSelector((state: State) => state.flashcards.items)
  const theme = useSelector((state: State) => theming(state.theme.mode))

  const styles = styling(theme)

  const { cards } = useMemo(() => flashcards[key], [key])

  const handlePress = useCallback(() => {
    Alert.alert(
      t('collections.learn'),
      t('collections.learnDescription'),
      [
        {
          text: t('collections.flashcardsButton'),
          onPress: () => navigation.navigate('flashcards', { name, key }),
        },
        {
          text: t('collections.takeTestButton'),
          onPress: () => navigation.navigate('quiz', { name, key }),
        },
      ],
      { cancelable: true },
    )
  }, [name, key, t])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <TranslationResult
            item={{
              text: i18n.language === 'ru' ? item.ru : item.en,
              translatedText: item.buryat,
              id: item.id,
            }}
          />
        )}
      />
      <Button
        className={styles.button}
        onPress={handlePress}
        label={t('collections.learnButton')}
        view="action"
      />
    </SafeAreaView>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    card: {
      flexDirection: 'row',
    },
    row: {
      paddingHorizontal: theme.spacing.l,
    },
    button: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 32,
      backgroundColor: theme.colors.accent,
      borderRadius: 12,
      paddingHorizontal: 80,
      ...theme.shadows.basicShadow,
    },
  })
