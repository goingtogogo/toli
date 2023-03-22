import React, { useCallback, useMemo } from 'react'
import { StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { useSelector } from 'react-redux';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../../App';

import { TranslationResult } from '../../../components/TranslationResult/TranslationResult';
import { theme } from '../../../utils/theme'
import { Button } from '../../../components/Button/Button';
import { State } from '../../../store/store';


type Props = NativeStackScreenProps<StackParamList, 'collection'>;


export function Collection(props: Props) {
  const { route: { params: { key, name } }, navigation } = props;
  const flashcards = useSelector((state: State) => state.flashcards.items)
  const { cards } = useMemo(() => flashcards[key], [key]);

  const handlePress = useCallback(() => navigation.navigate('flashcards', { name, key }), [name, key]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <TranslationResult item={item} />}
      />
      <Button className={styles.button} onPress={handlePress} label="Выучить" view="action" />
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
    alignSelf: 'center',
    bottom: 32,
    backgroundColor: theme.colors.accent,
    borderRadius: 12,
    paddingHorizontal: 80,
    ...theme.shadows.basicShadow
  },
})
