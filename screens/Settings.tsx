import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as Clipboard from 'expo-clipboard'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, Alert, Linking, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { StackParamList } from '@/App'
import { SettingsItem } from '@/components/SettingsItem/SettingsItem'
import { clearHistory } from '@/store/slice/history'
import { clearSaved } from '@/store/slice/saved'
import { setTheme } from '@/store/slice/theme'
import { State } from '@/store/store'
import { CONTACT_EMAIL } from '@/utils/constants'
import i18n from '@/utils/i18n/i18n'
import { Theming, theming } from '@/utils/theme'

export type SettingsKey =
  | 'history'
  | 'saved'
  | 'about'
  | 'community'
  | 'theme'
  | 'rate'
  | 'language'

type Props = NativeStackScreenProps<StackParamList, 'settings'>

export function Settings({ navigation }: Props) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const theme = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(theme))

  const deleteItems = useCallback(
    async (key: SettingsKey) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify([]))
        if (key === 'history') {
          dispatch(clearHistory())
          Alert.alert(t('alerts.historyCleared'))
        } else {
          dispatch(clearSaved())
          Alert.alert(t('alerts.savedCleared'))
        }
      } catch (e) {
        Alert.alert(t('errors.somethingWentWrong'), t('errors.tryAgainLater'))
      }
    },
    [dispatch],
  )

  const goAbout = useCallback(() => navigation.push('about'), [])

  const handleEmailPress = useCallback(async () => {
    const subject = t('about.emailSubject')

    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}}`
    Linking.openURL(url).catch(async (err) => {
      console.warn(t('errors.emailError'), err)
      await Clipboard.setStringAsync(CONTACT_EMAIL)
      Alert.alert(t('errors.emailCopied'))
    })
  }, [t])

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

  const changeLanguage = useCallback(async () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru'
    await i18n.changeLanguage(newLang)
    await AsyncStorage.setItem('preferredLanguage', newLang)
  }, [])

  return (
    <View style={styles.container}>
      <SettingsItem
        name="rate"
        subtitle={t('settings.rateAppSubtitle')}
        title={t('settings.rateApp')}
        icon="link-external"
        onPress={goToStore}
      />
      <SettingsItem
        name="history"
        title={t('settings.clearHistory')}
        subtitle={t('settings.clearHistorySubtitle')}
        icon="trash"
        onPress={deleteItems}
      />
      <SettingsItem
        name="saved"
        title={t('settings.clearSaved')}
        subtitle={t('settings.clearSavedSubtitle')}
        icon="trash"
        onPress={deleteItems}
      />
      <SettingsItem
        name="community"
        title={t('settings.community')}
        subtitle={t('settings.communitySubtitle')}
        icon="paper-airplane"
        onPress={handleEmailPress}
      />
      <SettingsItem
        name="theme"
        title={
          theme === 'light' ? t('settings.darkTheme') : t('settings.lightTheme')
        }
        subtitle={t('settings.themeSubtitle')}
        icon={theme === 'light' ? 'moon' : 'sun'}
        onPress={changeTheme}
      />
      <SettingsItem
        name="language"
        title={t('settings.language')}
        subtitle={t('settings.languageSubtitle')}
        icon="globe"
        onPress={changeLanguage}
      />
      <SettingsItem
        name="about"
        subtitle=""
        title={t('settings.about')}
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
