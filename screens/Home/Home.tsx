import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, Alert, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid'
import { addItem } from '../../store/slice/history'
import { isSmallDevice, Theming, theming } from '../../utils/theme'
import { Language, translate } from '../../utils/api/translate'
import { capitalizeFirstLetter } from '../../utils/capitalize'
import { Header } from './Header/Header';
import { History } from './History/History';
import { Result } from './Result/Result';
import { Search } from './Search/Search'
import { State } from '../../store/store'

export function Home() {
    const mode = useSelector((state: State) => state.theme.mode);
    const styles = styling(theming(mode));

    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [loading, setIsLoading] = useState(false)
    const [languageFrom, setLanguageFrom] = useState<Language>('russian')

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
                const translation = await translate(formattedValue, languageFrom)
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
                Alert.alert('Что-то пошло не так', 'Попробуйте повторить позже')
            }
            finally {
                setIsLoading(false)
            }
        }
    }, [value, languageFrom, dispatch])

    return (
        <View style={styles.container}>
            <Header languageFrom={languageFrom} setLanguageFrom={setLanguageFrom} />
            <Search loading={loading} value={value} setValue={setValue} onSubmit={onSubmit} languageFrom={languageFrom} />
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
})
