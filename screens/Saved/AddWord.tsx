import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import uuid from 'react-native-uuid'
import { useDispatch, useSelector } from 'react-redux'

import { StackParamList } from '@/App'
import { Button } from '@/components/Button/Button'
import { setSaved } from '@/store/slice/saved'
import { State } from '@/store/store'
import { isSmallDevice, Theming, theming } from '@/utils/theme'

type Props = NativeStackScreenProps<StackParamList, 'add'>

export function AddWord({ navigation }: Props) {
  const { t } = useTranslation()
  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  const dispatch = useDispatch()
  const savedItems = useSelector((state: State) => state.saved.items)

  const [focused, setFocused] = useState<'word' | 'translation'>('word')
  const [word, setWord] = useState('')
  const [translation, setTranslation] = useState('')

  const goBack = useCallback(() => navigation.popToTop(), [])

  const handleLetterClick = (letter: string) => {
    if (focused === 'translation') {
      setTranslation(translation + letter)
    } else setWord(word + letter)
  }

  const onSave = useCallback(async () => {
    const item = {
      text: word.trim(),
      translatedText: translation.trim(),
      id: uuid.v4(),
      dateTime: new Date().toISOString(),
    }

    const newSavedItems = [item, ...savedItems]
    await AsyncStorage.setItem('saved', JSON.stringify(newSavedItems))

    dispatch(setSaved({ items: newSavedItems }))
    goBack()
  }, [dispatch, savedItems, word, translation])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {!word && (
          <Text style={styles.placeholder}>{t('addWord.wordPlaceholder')}</Text>
        )}
        <TextInput
          multiline={true}
          blurOnSubmit={true}
          autoCorrect={false}
          style={styles.input}
          value={word}
          onChangeText={(text) => setWord(text)}
          maxLength={80}
          textAlignVertical="top"
          keyboardAppearance={mode || 'default'}
          onFocus={() => setFocused('word')}
        />
      </View>

      <View style={styles.lettersContainer}>
        <TouchableOpacity onPress={() => handleLetterClick('ү')}>
          <Text style={styles.letter}>ү</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLetterClick('һ')}>
          <Text style={styles.letter}>һ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLetterClick('ө')}>
          <Text style={styles.letter}>ө</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        {!translation && (
          <Text style={styles.placeholder}>
            {t('addWord.translationPlaceholder')}
          </Text>
        )}
        <TextInput
          multiline={true}
          blurOnSubmit={true}
          autoCorrect={false}
          style={styles.input}
          value={translation}
          onChangeText={(text) => setTranslation(text)}
          maxLength={80}
          textAlignVertical="top"
          keyboardAppearance={mode || 'default'}
          onFocus={() => setFocused('translation')}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          onPress={goBack}
          label={t('common.cancel')}
          view="default"
          className={[styles.button, styles.cancel]}
        />
        <Button
          onPress={onSave}
          label={t('common.save')}
          view="action"
          className={styles.button}
        />
      </View>
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
    inputContainer: {
      position: 'relative',
      height: 140,
      flexDirection: 'row',
      alignItems: 'baseline',
      marginHorizontal: 36,
      paddingLeft: theme.spacing.l,
      paddingRight: theme.spacing.xl,
      borderRadius: 20,
      shadowOffset: {
        height: 8,
        width: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowColor: '#040844',
      elevation: 3,
      backgroundColor: theme.colors.secondary,
    },
    placeholder: {
      position: 'absolute',
      left: 24,
      top: 16,
      fontFamily: 'regular',
      fontSize: 20,
      color: '#9F9F9F',
    },
    input: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: theme.spacing.s,
      fontFamily: 'regular',
      fontSize: 20,
      color: theme.colors.accentText,
      height: 120,
    },
    lettersContainer: {
      marginVertical: theme.spacing.m,
      flexDirection: 'row',
      alignSelf: 'center',
    },
    letter: {
      paddingHorizontal: theme.spacing.m,
      paddingVertical: 2,
      marginHorizontal: 4,
      fontSize: 24,
      fontFamily: 'regular',
      color: theme.colors.secondaryText,
      borderWidth: 2,
      borderRadius: 12,
      borderColor: '#d6d6d6',
    },
    buttons: {
      marginTop: theme.spacing.xl,
      marginHorizontal: 36,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    button: {
      flex: 1,
    },
    cancel: {
      marginRight: theme.spacing.m,
    },
  })
