import * as Clipboard from 'expo-clipboard'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Linking, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

export function About() {
  const { t } = useTranslation()
  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  const handleEmailPress = useCallback(async () => {
    const email = 'toli.language.app@gmail.com'
    const subject = t('about.emailSubject')

    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}}`
    Linking.openURL(url).catch(async (err) => {
      console.warn(t('errors.emailError'), err)
      await Clipboard.setStringAsync(email)
      Alert.alert(t('errors.emailCopied'))
    })
  }, [t])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.accent}>{t('about.greeting')}</Text>
      <Text style={styles.text}>{t('about.thanks')}</Text>
      <Text style={styles.text} selectable>
        {t('about.gratitude')}{' '}
        <Text style={styles.accent}>https://burlang.ru/ </Text>
        {t('about.gratitudeContinued')}
      </Text>
      <Text style={styles.text} selectable>
        {t('about.feedback')}{' '}
        <Text style={styles.accent} onPress={handleEmailPress}>
          toli.language.app@gmail.com
        </Text>
      </Text>
      <Text style={styles.text} selectable>
        {t('about.collaboration')}{' '}
        <Text style={styles.accent} onPress={handleEmailPress}>
          toli.language.app@gmail.com)
        </Text>
      </Text>
      <Text style={styles.text}>{t('about.closing')}</Text>
    </ScrollView>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingBottom: 30,
      paddingTop: theme.spacing.s,
      paddingHorizontal: theme.spacing.m,
    },
    accent: {
      fontSize: 16,
      lineHeight: 22,
      fontFamily: 'medium',
      color: theme.colors.accent,
    },
    text: {
      paddingVertical: theme.spacing.xs,
      fontSize: 16,
      lineHeight: 22,
      fontFamily: 'regular',
      color: theme.colors.text,
    },
  })
