import React, { useCallback } from 'react'
import { StyleSheet, View, Alert, Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { SettingsItem } from '../components/SettingsItem/SettingsItem'
import { clearHistory } from '../store/slice/history'
import { clearSaved } from '../store/slice/saved'
import { setTheme } from '../store/slice/theme'
import { StackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Theming, theming } from '../utils/theme'
import { State } from '../store/store'

export type SettingsKey = 'history' | 'saved' | 'about' | 'community' | 'theme'

type Props = NativeStackScreenProps<StackParamList, 'settings'>;

export function Settings({ navigation }: Props) {
    const dispatch = useDispatch()
    const theme = useSelector((state: State) => state.theme.mode);
    const styles = styling(theming(theme));

    const deleteItems = useCallback(async (key: SettingsKey) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify([]))
            if (key === 'history') {
                dispatch(clearHistory())
                Alert.alert('История очищена')
            }
            else {
                dispatch(clearSaved())
                Alert.alert('«Избранное» очищено')
            }
        }

        catch (e) {
            Alert.alert('Что-то пошло не так', 'Попробуйте повторить позже')

        }
    }, [dispatch])

    const goAbout = useCallback(() => navigation.push('about'), []);

    const goToTelegram = useCallback(async () => {
        const url = 'https://t.me/apptoli';
        await Linking.openURL(url);
    }, [])

    const changeTheme = useCallback(() => {
        dispatch(setTheme())
    }, [dispatch, theme]);


    return (
        <View style={styles.container}>
            <SettingsItem
                name="about"
                subtitle=""
                title="О приложении"
                icon="info"
                onPress={goAbout}
            />
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
                name="community"
                title="Сообщество"
                subtitle="поддержка в Telegram"
                icon="paper-airplane"
                onPress={goToTelegram}
            />
            <SettingsItem
                name="theme"
                title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
                subtitle="сменить оформление"
                icon={theme === 'light' ? 'moon' : 'sun'}
                onPress={changeTheme}
            />
        </View>
    )
}


const styling = (theme: Theming) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
})
