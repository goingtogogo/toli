import React, { useCallback, useMemo } from 'react'
import { StyleSheet, SafeAreaView, FlatList, Alert } from 'react-native'
import { useSelector } from 'react-redux';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../../App';

import { TranslationResult } from '../../../components/TranslationResult/TranslationResult';
import { Theming, theming } from '../../../utils/theme'
import { Button } from '../../../components/Button/Button';
import { State } from '../../../store/store';


type Props = NativeStackScreenProps<StackParamList, 'collection'>;

export function Collection(props: Props) {
  const { route: { params: { key, name } }, navigation } = props;

  const flashcards = useSelector((state: State) => state.flashcards.items)
  const theme = useSelector((state: State) => theming(state.theme.mode));
  
  const styles = styling(theme);

  const { cards } = useMemo(() => flashcards[key], [key]);

  const handlePress = useCallback(() => {
    Alert.alert('Учить', 'Выбрать карточки для заучивания или пройти тест', [
      {
        text: 'Карточки',
        onPress: () => navigation.navigate('flashcards', { name, key }),
      },
      {text: 'Пройти тест', onPress: () => navigation.navigate('quiz', { name, key })},
    ], {cancelable: true});
  }, [name, key]);

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


const styling = (theme: Theming) => StyleSheet.create({
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
