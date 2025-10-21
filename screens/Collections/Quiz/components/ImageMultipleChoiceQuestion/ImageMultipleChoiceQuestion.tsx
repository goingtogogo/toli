import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { ImageOption } from './ImageOption/ImageOption'

import { Button } from '@/components/Button/Button'
import { Question } from '@/screens/Collections/Quiz/Quiz'
import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type Props = {
  question: Question
  onCorrect: () => void
  onWrong: () => void
}

export const ImageMultipleChoiceQuestion = ({
  question,
  onCorrect,
  onWrong,
}: Props) => {
  const theme = useSelector((state: State) => theming(state.theme.mode))
  const styles = styling(theme)
  const [selected, setSelected] = useState<{
    correct: false
    id: string
  } | null>(null)

  const onButtonPress = () => {
    if (selected?.correct) {
      onCorrect()

      setSelected(null)
    } else {
      onWrong()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button
        view="action"
        label="Проверить"
        onPress={onButtonPress}
        // disabled={!selected}
        className={styles.button}
      />
    </View>
  )
}

const styling = (theme: Theming) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: theme.spacing.l,
    },
    title: {
      marginTop: theme.spacing.m,
      color: theme.colors.text,
      fontFamily: 'bold',
      fontSize: 18,
    },
    optionsContainer: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      justifyContent: 'space-between',
      alignContent: 'flex-end',
      marginBottom: 80,
      marginTop: theme.spacing.m,
    },
    button: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 32,
      backgroundColor: theme.colors.accent,
      borderRadius: 12,
      paddingHorizontal: 80,
      ...theme.shadows.basicShadow,
    },
  })
