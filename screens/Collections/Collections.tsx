import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useMemo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { StackParamList } from '../../App'

import { theme } from '../../utils/theme'

type ButtonProps = {
  collectionKey: keyof typeof flashcards;
}

export const flashcards =
{
  meeting: {
    name: 'Приветствие',
    cards: [
      { buryat: 'хайр', english: 'hello' },
      { buryat: 'баярлалаа', english: 'thank you' },
      { buryat: 'сайн байна уу?', english: 'how are you?' }
    ]
  }
}

export function Collections() {
  return (
    <View style={styles.container}>
      {Object.keys(flashcards).map(key =>
        <CollectionButton key={key} collectionKey={key as keyof typeof flashcards} />
      )}
    </View>
  )
}


type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<StackParamList, 'collection'>,
  StackNavigationProp<StackParamList>
>;

const CollectionButton = ({ collectionKey }: ButtonProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const { name } = useMemo(() => flashcards[collectionKey as keyof typeof flashcards], [])

  const handlePress = useCallback(() => navigation.navigate('collection', { name, key: collectionKey }), [])

  return (
    <TouchableOpacity style={styles.collection} onPress={handlePress}>
      <Text style={styles.collectionLabel}>{name}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background,
  },
  collection: {
    flexBasis: '50%',
    borderWidth: 1,
    borderColor: theme.colors.primary
  },
  collectionLabel: {}
})
