import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useMemo } from 'react'
import { useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { ActionButton } from '@/components/ActionButton/ActionButton'
import { HistoryItem } from '@/store/slice/history'
import { setSaved } from '@/store/slice/saved'
import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type Props = {
  item: HistoryItem
}

export const TranslationResult: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch()

  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  const savedItems = useSelector((state: State) => state.saved.items)
  const isSaved = savedItems.some((savedItem) => savedItem.id === item.id)
  const icon = useMemo(() => (isSaved ? 'star-fill' : 'star'), [isSaved])

  const starItem = useCallback(async () => {
    const newSavedItems = isSaved
      ? savedItems.filter((savedItem) => savedItem.id !== item.id)
      : [item, ...savedItems]
    await AsyncStorage.setItem('saved', JSON.stringify(newSavedItems))

    dispatch(setSaved({ items: newSavedItems }))
  }, [dispatch, savedItems, item])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.text}</Text>
        <Text style={styles.subtitle}>{item.translatedText}</Text>
      </View>

      <ActionButton onPress={starItem} name={icon} />
    </View>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 36,
      marginVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.xl,
      paddingVertical: theme.spacing.s,
      minHeight: 80,
      borderRadius: 20,
      backgroundColor: theme.colors.secondary,
      ...theme.shadows.basicShadow,
    },
    textContainer: {
      flex: 1,
      marginRight: 8,
    },
    title: {
      color: theme.colors.secondaryText,
      fontFamily: 'medium',
      fontSize: 16,
    },
    subtitle: {
      marginTop: 4,
      color: theme.colors.accentText,
      fontFamily: 'medium',
      fontSize: 16,
    },
  })
