import React, { useCallback } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { SettingsItem } from '../components/SettingsItem/SettingsItem'
import { theme } from '../utils/theme'
import { clearHistory } from '../store/slice/history'
import { clearSaved } from '../store/slice/saved'
import { StackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type SettingsKey = 'history' | 'saved' | 'about'

type Props = NativeStackScreenProps<StackParamList, 'about'>;


export function Settings({ navigation }: Props) {
    const dispatch = useDispatch()

    const deleteItems = useCallback(async (key: SettingsKey) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify([]))
            dispatch(key === 'history' ? clearHistory() : clearSaved())
            Alert.alert('История очищена')
        }

        catch (e) {
            Alert.alert('Что-то пошло не так', 'Попробуйте повторить позже')

        }
    }, [dispatch])


    const goAbout = useCallback(() => navigation.push('about'), []);

    return (
        <View style={styles.container}>
            <SettingsItem
                name="history"
                title="Очистить Историю"
                subtitle="удалит все записи из истории"
                icon="trash"
                onPress={deleteItems}
            />
            <SettingsItem
                name="saved"
                title="Очистить Избранное"
                subtitle="удалит все записи из избранного"
                icon="trash"
                onPress={deleteItems}
            />
            <SettingsItem
                name="about"
                subtitle=""
                title="О приложении"
                icon="info"
                onPress={goAbout}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
})
