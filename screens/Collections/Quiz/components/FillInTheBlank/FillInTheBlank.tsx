import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { WordOption } from './WordOption/WordOption'

import { Button } from '@/components/Button/Button'
import { Question } from '@/screens/Collections/Quiz/Quiz'
import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type Props = {
  question: Question
  onCorrect: () => void
  onWrong: () => void
}

export const FillInTheBlank = ({ question, onCorrect, onWrong }: Props) => {
  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  const [parts, setParts] = useState(question.parts)

  useEffect(() => {
    setParts(question.parts)
  }, [question.parts])

  const onButtonPress = () => {
    if (checkIfCorrect()) {
      onCorrect()
    } else {
      onWrong()
    }
  }

  const checkIfCorrect = () => {
    return (
      parts.filter((part) => part.isBlank && part.selected !== part.text)
        .length === 0
    )
  }

  const addOptionToSelected = (option: string) => {
    if (isSelected(option)) {
      return
    }

    let isChanged = false
    const newParts = parts.map((part) => {
      if (part.isBlank && !part.selected && !isChanged) {
        isChanged = true
        return { ...part, selected: option }
      }
      return part
    })

    if (isChanged) {
      setParts(newParts)
    }
  }

  const removeSelectedAt = (index: number) => {
    const newParts = [...parts]
    newParts[index].selected = null
    setParts(newParts)
  }

  const isSelected = (option: string) => {
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Составьте предложение</Text>
      <View style={styles.row}>
        {parts.map((part, index) => {
          if (part.isBlank) {
            return (
              <View key={part.text} style={styles.blank}>
                {part.selected && (
                  <WordOption
                    text={part.selected}
                    onPress={() => removeSelectedAt(index)}
                  />
                )}
              </View>
            )
          } else {
            return (
              <Text key={part.text} style={styles.text}>
                {part.text}
              </Text>
            )
          }
        })}
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            key={option}
            text={option}
            isSelected={isSelected(option)}
            onPress={() => addOptionToSelected(option)}
          />
        ))}
      </View>

      <Button
        view="action"
        label="Проверить"
        onPress={onButtonPress}
        // disabled={isReadyToCheck()}
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
    row: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      flexWrap: 'wrap',
      marginTop: theme.spacing.xl,
    },
    text: {
      alignSelf: 'flex-end',
      fontSize: 18,
    },
    blank: {
      height: 46,
      marginBottom: theme.spacing.xs,
      borderBottomWidth: 2,
      borderColor: theme.colors.accentText,
      minWidth: 100,
    },
    optionsContainer: {
      height: 200,
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
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
