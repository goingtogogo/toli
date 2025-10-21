import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, Alert, Keyboard, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid'
import { addItem } from '../../store/slice/history'
import { isSmallDevice, Theming, theming } from '../../utils/theme'
import { Language, translate, aiTranslate } from '../../utils/api/translate'
import { capitalizeFirstLetter } from '../../utils/capitalize'
import { Header } from './Header/Header';
import { History } from './History/History';
import { Result } from './Result/Result';
import { Search } from './Search/Search'
import { TranslationMode } from '../../components/TranslationModeSwitch/TranslationModeSwitch'
import { State } from '../../store/store'


export function Home() {
    const mode = useSelector((state: State) => state.theme.mode);
    const styles = styling(theming(mode));

    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [loading, setIsLoading] = useState(false)
    const [languageFrom, setLanguageFrom] = useState<Language>('russian')
    const [translationMode, setTranslationMode] = useState<TranslationMode>('normal')



    const dispatch = useDispatch()

    useEffect(() => {
        if (!value) {
            setResult('')
        }
    }, [value])

    useEffect(() => {
        if (value) {
            setValue('')
            setResult('')
        }
    }, [languageFrom])

    const onSubmit = useCallback(async (value: string) => {
        const formattedValue = value.trim();

        if (formattedValue) {
            Keyboard.dismiss()
            setIsLoading(true)
            try {
                const translation = translationMode === 'ai'
                    ? await aiTranslate(formattedValue, languageFrom)
                    : await translate(formattedValue, languageFrom);

                setResult(capitalizeFirstLetter(translation))

                const item = {
                    text: formattedValue,
                    translatedText: translation,
                    id: uuid.v4(),
                    dateTime: new Date().toISOString()
                }

                dispatch(addItem({ item }))
            }

            catch (e) {
                console.error(e)
                const errorMessage = translationMode === 'ai'
                    ? 'Не удалось получить перевод от ИИ. Попробуйте позже.'
                    : 'Что-то пошло не так. Попробуйте повторить позже';
                Alert.alert('Ошибка', errorMessage)
            }
            finally {
                setIsLoading(false)
            }
        }
    }, [value, languageFrom, translationMode, dispatch])

    return (
        <View style={styles.container}>
            <Header
                languageFrom={languageFrom}
                setLanguageFrom={setLanguageFrom}
                translationMode={translationMode}
                setTranslationMode={setTranslationMode}
            />
            <Search loading={loading} value={value} setValue={setValue} onSubmit={onSubmit} languageFrom={languageFrom} />
            {translationMode === 'ai' && (
                <Text style={styles.draftText}>Перевод может быть неточным</Text>
            )}
            {result && <Result result={result} />}
            <History />
        </View>
    )
}


const styling = (theme: Theming) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingBottom: isSmallDevice ? 60 : 90
    },
    draftText: {
        fontSize: 10,
        fontFamily: 'regular',
        color: theme.colors.secondaryText,
        textAlign: 'center',
        marginTop: 8,
        marginHorizontal: 36,
    },
})
