import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import uuid from 'react-native-uuid'
import { addItem } from '../../store/slice/history'
import { theme } from '../../utils/theme'
import { Language, translate } from '../../utils/api/translate'
import { capitalizeFirstLetter } from '../../utils/capitalize'
import { Header } from './Header/Header';
import { History } from './History/History';
import { Result } from './Result/Result';
import { Search } from './Search/Search'

export function Home() {
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
            setValue(result)
            onSubmit(result)
        }
    }, [languageFrom])

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

    return (
        <View style={styles.container}>
            <Header languageFrom={languageFrom} setLanguageFrom={setLanguageFrom} />
            <Search loading={loading} value={value} setValue={setValue} onSubmit={onSubmit} />
            {result && <Result result={result} />}
            <History />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
})
