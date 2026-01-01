import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as Clipboard from 'expo-clipboard'
import React, { useCallback } from 'react'
import { StyleSheet, View, Alert, Linking, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { StackParamList } from '@/App'
import { SettingsItem } from '@/components/SettingsItem/SettingsItem'
import { clearHistory } from '@/store/slice/history'
import { clearSaved } from '@/store/slice/saved'
import { setTheme } from '@/store/slice/theme'
import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

export type SettingsKey =
  | 'history'
  | 'saved'
  | 'about'
  | 'community'
  | 'theme'
  | 'rate'

type Props = NativeStackScreenProps<StackParamList, 'settings'>

export function Settings({ navigation }: Props) {
  const dispatch = useDispatch()
  const theme = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(theme))

  const deleteItems = useCallback(
    async (key: SettingsKey) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify([]))
        if (key === 'history') {
          dispatch(clearHistory())
          Alert.alert('История очищена')
        } else {
          dispatch(clearSaved())
          Alert.alert('«Избранное» очищено')
        }
      } catch (e) {
        Alert.alert('Что-то пошло не так', 'Попробуйте повторить позже')
      }
    },
    [dispatch],
  )

  const goAbout = useCallback(() => navigation.push('about'), [])

  // const goToTelegram = useCallback(async () => {
  //   const url = 'https://t.me/apptoli'
  //   await Linking.openURL(url)
  // }, [])
  const handleEmailPress = useCallback(async () => {
    const email = 'toli.language.app@gmail.com'
    const subject = 'Вопрос о приложении Toli'

    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}}`
    Linking.openURL(url).catch(async (err) => {
      console.warn('Не удалось открыть почтовое приложение:', err)
      await Clipboard.setStringAsync(email)
      Alert.alert('Email скопирован в буфер обмена')
    })
  }, [])

  const goToStore = useCallback(async () => {
    const url = {
      ios: 'https://apps.apple.com/ru/app/толи/id6445924225',
      android: 'market://details?id=com.goingtogogo.toli',
    }
    await Linking.openURL(url[Platform.OS as 'ios' | 'android'])
  }, [])

  const changeTheme = useCallback(() => {
    dispatch(setTheme())
  }, [dispatch, theme])

  return (
    <View style={styles.container}>
      <SettingsItem
        name="rate"
        subtitle="каждая оценка поможет продвигать приложение"
        title="Оценить приложение"
        icon="link-external"
        onPress={goToStore}
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
        subtitle="Написать нам"
        icon="paper-airplane"
        onPress={handleEmailPress}
      />
      <SettingsItem
        name="theme"
        title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        subtitle="сменить оформление"
        icon={theme === 'light' ? 'moon' : 'sun'}
        onPress={changeTheme}
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

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  })
