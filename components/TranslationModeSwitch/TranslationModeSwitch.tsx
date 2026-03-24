import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { State } from '@/store/store'
import { TranslationMode } from '@/utils/api/translate'
import { Theming, theming } from '@/utils/theme'

const MODES: {
  id: TranslationMode
  icon?: keyof typeof MaterialIcons.glyphMap
}[] = [
    { id: 'api' },
    { id: 'ai', icon: 'auto-fix-high' },
    { id: 'google' },
  ]

type Props = {
  mode: TranslationMode
  onModeChange: (mode: TranslationMode) => void
}

export const TranslationModeSwitch: React.FC<Props> = ({
  mode,
  onModeChange,
}) => {
  const { t } = useTranslation()
  const theme = useSelector((state: State) => theming(state.theme.mode))
  const styles = styling(theme)

  return (
    <View style={styles.container}>
      {MODES.map((tMode) => (
        <TouchableOpacity
          key={tMode.id}
          style={[styles.option, tMode.id === mode && styles.activeOption]}
          onPress={() => onModeChange(tMode.id)}
        >
          {'icon' in tMode && (
            <MaterialIcons
              name={tMode.icon}
              size={14}
              color={tMode.id === mode ? theme.colors.secondary : theme.colors.text}
              style={styles.icon}
            />
          )}
          <Text
            style={[styles.optionText, tMode.id === mode && styles.activeText]}
          >
            {t(`translationMode.${tMode.id}`)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.secondary,
      borderRadius: 12,
      padding: 2,
      marginHorizontal: 36,
      marginBottom: 16,
    },
    option: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    activeOption: {
      backgroundColor: theme.colors.accent,
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      shadowColor: theme.colors.accent,
      elevation: 2,
    },
    optionText: {
      fontSize: 12,
      fontFamily: 'bold',
      color: theme.colors.text,
      textTransform: 'uppercase',
    },
    activeText: {
      color: theme.colors.secondary,
    },
    icon: {
      marginRight: 4,
    },
  })
