import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Theming, theming } from '../../utils/theme'
import { useSelector } from 'react-redux'
import { State } from '../../store/store'

export type TranslationMode = 'normal' | 'ai';

type Props = {
  mode: TranslationMode;
  onModeChange: (mode: TranslationMode) => void;
}

export const TranslationModeSwitch: React.FC<Props> = ({ mode, onModeChange }) => {
  const theme = useSelector((state: State) => theming(state.theme.mode));
  const styles = styling(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, mode === 'normal' && styles.activeOption]}
        onPress={() => onModeChange('normal')}
      >
        <Text style={[styles.optionText, mode === 'normal' && styles.activeText]}>
          Обычный
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, mode === 'ai' && styles.activeOption]}
        onPress={() => onModeChange('ai')}
      >
        <MaterialIcons
          name="auto-fix-high"
          size={14}
          color={mode === 'ai' ? theme.colors.secondary : theme.colors.text}
          style={styles.icon}
        />
        <Text style={[styles.optionText, mode === 'ai' && styles.activeText]}>
          ИИ перевод
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styling = (theme: Theming) => StyleSheet.create({
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
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  activeOption: {
    backgroundColor: theme.colors.accent,
    shadowOffset: {
      height: 2,
      width: 0
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