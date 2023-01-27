
import React, { useCallback, useEffect, useState } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { StackParamList } from '../App';
import { colors } from '../utils/colors';
import { Feather } from '@expo/vector-icons';
import { translate } from '../utils/api/translate';
import { capitalizeFirstLetter } from '../utils/capitalize';
import * as Clipboard from 'expo-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { addItem, setItems } from '../store/slice/history';
import { State } from '../store/store';
import { TranslationResult } from '../components/TranslationResult/TranslationResult';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setSaved } from '../store/slice/saved';


type Props = {
  navigation: NativeStackNavigationProp<StackParamList, 'main'>
}

const loadData = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const history = await AsyncStorage.getItem('history');

    if (history) {
      const formattedHistory = JSON.parse(history);
      dispatch(setItems({ items: formattedHistory }))
    }

    const saved = await AsyncStorage.getItem('saved');

    if (saved) {
      const formattedSaved = JSON.parse(saved);
      dispatch(setSaved({ items: formattedSaved }))
    }
  }

  catch (e) {
    console.log(e);
  }
}

export function Home(props: Props) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [languageFrom, setLanguageFrom] = useState<'russian' | 'buryat'>('russian');

  const dispatch = useDispatch();
  const history = useSelector((state: State) => state.history.items);


  useEffect(() => {
    if (!value) {
      setResult('');
    }
  }, [value])

  useEffect(() => {
    if (value) {
      setValue(result);
      onSubmit(result);
    }
  }, [languageFrom]);

  useEffect(() => {
    // @ts-ignore
    dispatch(loadData());
  }, [dispatch]);

  useEffect(() => {
    const saveHistory = async () => {
      try {
        await AsyncStorage.setItem('history', JSON.stringify(history))
      }
      catch (e) {
        console.log(e)
      }
    }

    saveHistory();

  }, [history]);

  const onSubmit = React.useCallback(async (value: string) => {

    setIsLoading(true);
    try {
      const translation = await translate(value, languageFrom);
      setResult(capitalizeFirstLetter(translation));

      const id = uuid.v4();

      dispatch(addItem({ item: { text: value, translatedText: translation, id, dateTime: new Date().toISOString() } }));
    }

    catch (e) {
      console.error(e);
    }
    finally {
      setIsLoading(false)
    }
  }, [value, languageFrom, dispatch]);

  const copyToClipboard = useCallback(async () => {
    await Clipboard.setStringAsync(result);
  }, [result])


  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{languageFrom === 'russian' ? 'Русский' : 'Буряад'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.arrow} onPress={() => setLanguageFrom(languageFrom === 'russian' ? 'buryat' : 'russian')}>
          <Feather name="arrow-right" size={24} color={colors.secondary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{languageFrom === 'russian' ? 'Буряад' : 'Русский'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput multiline placeholder='Enter text' style={styles.input} value={value} onChangeText={(text) => setValue(text)} />

        <TouchableOpacity
          style={styles.iconContainer}
          disabled={value === ''}
          onPress={() => onSubmit(value)}
        >
          {loading ?
            <ActivityIndicator size="small" color={colors.primary} /> :
            <Feather name="arrow-right-circle" size={24} color={value !== '' ? colors.primary : colors.secondary} />
          }
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>

        <TouchableOpacity style={styles.iconContainer} disabled={result === ''} onPress={copyToClipboard}>
          <Feather name="copy" size={24} color={result !== '' ? colors.text : colors.secondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.historyContainer}>
        <FlatList
          data={history}
          renderItem={({ item }) => <TranslationResult item={item} />}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 8,
  },
  optionText: {
    fontFamily: 'bold',
    color: colors.primary
  },
  arrow: {
    borderRadius: 50,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontFamily: 'medium',
    height: 90,
    color: colors.text
  },
  iconContainer: {
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    height: 90,
    paddingVertical: 16
  },
  resultText: {
    fontFamily: 'medium',
    color: colors.primary,
    flex: 1,
    marginHorizontal: 20
  },
  historyContainer: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: 10
  }
});
