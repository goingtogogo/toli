import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { useSelector } from 'react-redux'

import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type Props = {
  onLetterPress: (letter: string) => void
  containerStyle?: ViewStyle
}

export const BuryatLetters: React.FC<Props> = ({
  onLetterPress,
  containerStyle,
}) => {
  const mode = useSelector((state: State) => state.theme.mode)
  const theme = theming(mode)
  const styles = styling(theme)

  return (
    <View style={[styles.lettersContainer, containerStyle]}>
      <TouchableOpacity onPress={() => onLetterPress('ү')}>
        <Text style={styles.letter}>ү</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onLetterPress('һ')}>
        <Text style={styles.letter}>һ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onLetterPress('ө')}>
        <Text style={styles.letter}>ө</Text>
      </TouchableOpacity>
    </View>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    lettersContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
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
