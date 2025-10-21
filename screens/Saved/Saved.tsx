import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { TranslationResult } from '@/components/TranslationResult/TranslationResult'
import { State } from '@/store/store'
import { isSmallDevice, Theming, theming } from '@/utils/theme'

export function Saved() {
  const saved = useSelector((state: State) => state.saved.items)

  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  if (saved.length === 0) {
    return (
      <View style={styles.noItemsContainer}>
        <Text style={styles.emptyText}>Вы пока еще ничего не сохранили</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={saved}
        renderItem={({ item }) => <TranslationResult item={item} />}
      />
    </View>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: theme.spacing.s,
      paddingBottom: isSmallDevice ? 60 : 90,
      backgroundColor: theme.colors.background,
    },
    noItemsContainer: {
      flex: 1,
      paddingTop: theme.spacing.s,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    emptyText: {
      fontFamily: 'medium',
      color: theme.colors.secondaryText,
    },
  })
