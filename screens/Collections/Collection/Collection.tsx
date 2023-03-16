import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useMemo } from 'react'
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native'
import { StackParamList } from '../../../App';

import { theme } from '../../../utils/theme'
import { flashcards } from '../Collections';


type Props = NativeStackScreenProps<StackParamList, 'collection'>;


export function Collection(props: Props) {
  const { route: { params: { key, name } }, navigation } = props;
  const { cards } = useMemo(() => flashcards[key], [key]);

  const handlePress = useCallback(() => navigation.navigate('flashcards', { name, key }), []);

  return (
    <SafeAreaView style={styles.container}>
      {cards.map(card => (
        <View key={card.buryat} style={styles.card}>
          <Text style={styles.row}>{card.buryat}</Text>
          <Text>{card.english}</Text>
        </View>
      ))}
      <View style={styles.button}>
        <Button
          onPress={handlePress}
          title="Выучить"
          accessibilityLabel="Выучить"
        />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  card: {
    flexDirection: 'row'
  },
  row: {
    paddingHorizontal: theme.spacing.l
  },
  button: {
    position: 'absolute',
    display: 'flex',
    height: 40,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.text,
    backgroundColor: theme.colors.accent
  }
})
