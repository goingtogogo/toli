import React, { useCallback, useEffect, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackParamList } from '../../../App';

import { theme } from '../../../utils/theme'
import { ProgressView } from '../../../components/ProgressView/ProgressView';
import { Button } from '../../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../store/store';
import { setCompleted } from '../../../store/slice/flashcards';


type Props = NativeStackScreenProps<StackParamList, 'navigation'>;


export function Navigation(props: Props) {
  const dispatch = useDispatch()
  const { items: flashcards, completed } = useSelector((state: State) => state.flashcards)
  const { route: { params: { key, name, swipedLeft, swipedRight } }, navigation } = props;
  const { cards } = useMemo(() => flashcards[key], [key]);

  useEffect(() => {
    navigation.setOptions({ headerTitle: `${cards.length} / ${cards.length}` })
  }, []);


  const goBack = useCallback(() => navigation.popToTop(), []);

  const repeat = useCallback(() => navigation.navigate('flashcards', { name, key }), [name, key])

  const onComplete = useCallback(async () => {
    const newCompleted = { ...completed, [key]: true }
    dispatch(setCompleted({ items: newCompleted }))

    await AsyncStorage.setItem('completedFlashcards', JSON.stringify(newCompleted))
    navigation.popToTop()
  }, [key, completed, dispatch])


  return (
    <View style={styles.container}>
      <ProgressView
        progress={1}
      />
      <View style={styles.result}>
        <Text style={styles.title}>Бэрхэ!</Text>
        <Text style={styles.subtitle}>Вы повторили все карточки 🤩 Продолжайте в том же духе!</Text>
        <View>
          <View style={styles.numbers}>
            <View style={styles.number}>
              <Text style={styles.secondaryText}>Знаю:</Text>
              <View style={[styles.learnt, styles.count]}>
                <Text style={styles.countText}>{swipedRight}</Text>
              </View>
            </View>
            <View style={styles.number}>
              <Text style={styles.secondaryText}>Еще изучаю:</Text>
              <View style={[styles.stillLearning, styles.count]}>
                <Text style={styles.countText}>{swipedLeft}</Text>
              </View>
            </View>
          </View>
          <Button onPress={onComplete} label="Отметить как выученное" icon="issue-closed" view="action" className={styles.button} />
          <Button onPress={repeat} label="Повторить" icon="sync" view="default" className={styles.button} />
          <Button onPress={goBack} label="Вернуться назад" view="ghost" className={styles.button} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  result: {
    paddingHorizontal: theme.spacing.l,
    paddingTop: 180,
    justifyContent: 'center',
    textAlign: 'center'
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: 24,
    color: theme.colors.primary
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: 16,
    color: theme.colors.primary
  },
  button: {
    marginTop: theme.spacing.s
  },
  numbers: {
    alignSelf: 'center',
    paddingVertical: theme.spacing.l
  },
  number: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs
  },
  secondaryText: {
    minWidth: 120,
    fontFamily: 'medium',
    fontSize: 18,
    color: theme.colors.secondaryText
  },
  count: {
    marginLeft: theme.spacing.xs,
    justifyContent: 'center',
    width: 40,
    padding: theme.spacing.xs,
    opacity: 0.8,
    borderRadius: 8,
  },
  learnt: {
    backgroundColor: '#119179',
  },
  stillLearning: {
    backgroundColor: '#E23053',
  },
  countText: {
    textAlign: 'center',
    color: theme.colors.background,
    fontFamily: 'medium',
    fontSize: 18,
  },
})
