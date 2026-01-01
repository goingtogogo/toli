import { Octicons } from '@expo/vector-icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'
import { useSelector } from 'react-redux'

import { State } from '@/store/store'
import { Language } from '@/utils/api/translate'
import { Theming, theming } from '@/utils/theme'

type Props = {
  value: string
  loading: boolean
  onSubmit: (value: string) => void
  setValue: (value: string) => void
  languageFrom: Language
}

export const Search: React.FC<Props> = (props) => {
  const { t } = useTranslation()
  const { value, setValue, onSubmit, loading, languageFrom } = props

  const mode = useSelector((state: State) => state.theme.mode)
  const theme = theming(mode)
  const styles = styling(theme)

  const handleLetterClick = (letter: string) => setValue(value + letter)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {!value && (
          <Octicons
            name="search"
            size={18}
            color="#9F9F9F"
            style={styles.searchIcon}
          />
        )}
        {!value && (
          <Text style={styles.placeholder}>{t('home.enterWord')}</Text>
        )}
        <TextInput
          multiline={true}
          blurOnSubmit={true}
          autoCorrect={false}
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
          maxLength={80}
          textAlignVertical="top"
          onSubmitEditing={() => onSubmit(value)}
          keyboardAppearance={mode || 'default'}
        />

        {value && (
          <TouchableOpacity
            onPress={() => onSubmit(value)}
            style={styles.arrowIconContainer}
          >
            {loading ? (
              <ActivityIndicator size="small" color={theme.colors.accent} />
            ) : (
              <Octicons
                name="arrow-right"
                size={24}
                color={theme.colors.accent}
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      {languageFrom === 'buryat' && (
        <View style={styles.lettersContainer}>
          <TouchableOpacity onPress={() => handleLetterClick('ү')}>
            <Text style={styles.letter}>ү</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLetterClick('һ')}>
            <Text style={styles.letter}>һ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLetterClick('ө')}>
            <Text style={styles.letter}>ө</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      zIndex: 5,
    },
    inputContainer: {
      position: 'relative',
      height: 240,
      flexDirection: 'row',
      alignItems: 'baseline',
      marginHorizontal: 36,
      paddingLeft: theme.spacing.l,
      paddingRight: theme.spacing.xl,
      borderRadius: 20,
      shadowOffset: {
        height: 8,
        width: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowColor: '#040844',
      elevation: 3,
      backgroundColor: theme.colors.secondary,
    },
    searchIcon: {
      position: 'absolute',
      left: 24,
      top: 18,
    },
    placeholder: {
      position: 'absolute',
      left: 50,
      top: 16,
      fontFamily: 'regular',
      fontSize: 20,
      color: '#9F9F9F',
    },
    input: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: theme.spacing.s,
      fontFamily: 'regular',
      fontSize: 20,
      color: theme.colors.accentText,
      height: 120,
    },
    arrowIconContainer: {
      position: 'absolute',
      top: theme.spacing.m,
      right: theme.spacing.xl,
    },
    lettersContainer: {
      position: 'absolute',
      bottom: theme.spacing.s,
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
    },
    letter: {
      paddingHorizontal: theme.spacing.m,
      paddingVertical: 2,
      marginHorizontal: 4,
      fontSize: 24,
      fontFamily: 'regular',
      color: theme.colors.secondaryText,
      borderWidth: 2,
      borderRadius: 12,
      borderColor: '#d6d6d6',
    },
  })
