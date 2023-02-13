import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid'
import { State } from '../store/store'
import { addItem, setItems } from '../store/slice/history'
import { setSaved } from '../store/slice/saved'
import { TranslationResult } from '../components/TranslationResult/TranslationResult'
import { theme } from '../utils/theme'
import { Language, translate } from '../utils/api/translate'
import { capitalizeFirstLetter } from '../utils/capitalize'



const loadData = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const history = await AsyncStorage.getItem('history')

        if (history) {
            const formattedHistory = JSON.parse(history)
            dispatch(setItems({ items: formattedHistory }))
        }

        const saved = await AsyncStorage.getItem('saved')

        if (saved) {
            const formattedSaved = JSON.parse(saved)
            dispatch(setSaved({ items: formattedSaved }))
        }
    }

    catch (e) {
        console.log(e)
    }
}

export function Home() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [loading, setIsLoading] = useState(false)
    const [languageFrom, setLanguageFrom] = useState<Language>('russian')

    const dispatch = useDispatch()
    const history = useSelector((state: State) => state.history.items)


    useEffect(() => {
        if (!value) {
            setResult('')
        }
    }, [value])

    useEffect(() => {
        if (value) {
            setValue(result)
            onSubmit(result)
        }
    }, [languageFrom])

    useEffect(() => {
        // @ts-ignore eslint-disable-next-line 
        dispatch(loadData())
    }, [dispatch])

    useEffect(() => {
        const saveHistory = async () => {
            try {
                await AsyncStorage.setItem('history', JSON.stringify(history))
            }
            catch (e) {
                console.log(e)
            }
        }

        saveHistory()

    }, [history])

    const onSubmit = useCallback(async (value: string) => {
        setIsLoading(true)
        try {
            const translation = await translate(value, languageFrom)
            setResult(capitalizeFirstLetter(translation))


            const item = {
                text: value,
                translatedText: translation,
                id: uuid.v4(),
                dateTime: new Date().toISOString()
            }

            dispatch(addItem({ item }))
        }

        catch (e) {
            console.error(e)
        }
        finally {
            setIsLoading(false)
        }
    }, [value, languageFrom, dispatch])

    const copyToClipboard = useCallback(async () => {
        await Clipboard.setStringAsync(result)
    }, [result])

    const handleLanguageChange = useCallback(() => setLanguageFrom(languageFrom === 'russian' ? 'buryat' : 'russian'), [languageFrom])

    const [languageFromLabel, languageToLabel] = useMemo(() => (
        languageFrom === 'russian' ? ['Русский', 'Буряад'] : ['Буряад', 'Русский']
    ), [languageFrom])

    return (
        <View style={styles.container}>
            <View style={styles.languageContainer}>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{languageFromLabel}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrow} onPress={handleLanguageChange}>
                    <Feather name="arrow-right" size={24} color={theme.colors.secondary} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{languageToLabel}</Text>
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
                        <ActivityIndicator size="small" color={theme.colors.primary} /> :
                        <Feather name="arrow-right-circle" size={24} color={value !== '' ? theme.colors.primary : theme.colors.secondary} />
                    }
                </TouchableOpacity>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{result}</Text>

                <TouchableOpacity style={styles.iconContainer} disabled={result === ''} onPress={copyToClipboard}>
                    <Feather name="copy" size={24} color={result !== '' ? theme.colors.text : theme.colors.secondary} />
                </TouchableOpacity>
            </View>

            <View style={styles.historyContainer}>
                <FlatList
                    data={history}
                    renderItem={({ item }) => <TranslationResult item={item} />}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 1,
    },
    option: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: theme.spacing.m,
        marginHorizontal: theme.spacing.xs,
    },
    optionText: {
        fontFamily: 'bold',
        color: theme.colors.primary
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
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 1,
    },
    input: {
        flex: 1,
        marginTop: theme.spacing.s,
        paddingVertical: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        fontFamily: 'medium',
        height: 90,
        color: theme.colors.text
    },
    iconContainer: {
        paddingHorizontal: theme.spacing.s,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultContainer: {
        flexDirection: 'row',
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 1,
        height: 90,
        paddingVertical: theme.spacing.m,
    },
    resultText: {
        fontFamily: 'medium',
        color: theme.colors.primary,
        flex: 1,
        marginHorizontal: theme.spacing.l,
    },
    historyContainer: {
        backgroundColor: theme.colors.secondary,
        flex: 1,
        padding: 10
    }
})
