import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ImageBackground, Alert } from 'react-native'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { isAndroid, isSmallDevice, Theming, theming } from '../../../utils/theme'
import { setItems } from '../../../store/slice/history'
import { setSaved } from '../../../store/slice/saved'
import { TranslationResult } from '../../../components/TranslationResult/TranslationResult'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../store/store'
import { Theme } from '../../../store/slice/theme'

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
        Alert.alert('Не удалось загрузить историю', 'Попробуйте повторить позже')
    }
}

export const History: React.FC = () => {
    const dispatch = useDispatch()
    const history = useSelector((state: State) => state.history.items)

    const mode = useSelector((state: State) => state.theme.mode);
    const styles = styling(theming(mode));

    const [isHistoryVisible, setIsHistoryVisible] = useState(true);

    useEffect(() => {
        // @ts-ignore eslint-disable-next-line 
        dispatch(loadData())
    }, [dispatch])


    return (
        <View style={styles.historyContainer}>
            {history.length > 0 &&
                <TouchableOpacity style={styles.showHistoryButton} onPress={() => setIsHistoryVisible(!isHistoryVisible)}>
                    <Text style={styles.showHistoryLabel}>{isHistoryVisible ? 'Скрыть историю' : 'Показать историю'}</Text>
                </TouchableOpacity>
            }
            {isHistoryVisible && <FlatList
                data={history}
                renderItem={({ item }) => <TranslationResult item={item} />}
            />}
            {!isAndroid && <Image mode={mode} styles={styles} />}
        </View >
    )
}

const Image = ({mode, styles} : {mode: Theme, styles: any}) => {
    return mode === 'light' ? <ImageBackground
        style={styles.background}
        source={require('../../../assets/book.png')}
    >
    </ImageBackground> : <ImageBackground
        style={styles.background}
        source={require('../../../assets/book-dark.png')}
    >
    </ImageBackground>
}


const styling = (theme: Theming) => StyleSheet.create({
    historyContainer: {
        flex: 1,
        marginTop: theme.spacing.xl,
        backgroundColor: theme.colors.background,
    },
    showHistoryButton: {
        alignItems: 'center',
        marginBottom: theme.spacing.xs
    },
    showHistoryLabel: {
        fontFamily: 'bold',
        fontSize: 16,
        color: theme.colors.accentText,
    },
    background: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        width: isSmallDevice ? 250 : 330,
        height: isSmallDevice ? 230 : 300,
        bottom: 60,
        zIndex: -1,
        elevation: -1,
    }
})