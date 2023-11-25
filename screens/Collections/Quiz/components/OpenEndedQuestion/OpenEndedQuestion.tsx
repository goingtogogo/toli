import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from '../../../../../components/Button/Button';
import { Question } from '../../Quiz';
import { Theming, theming } from '../../../../../utils/theme';
import { useSelector } from 'react-redux';
import { State } from '../../../../../store/store';

type Props = {
  question: Question;
  onCorrect: () => void;
  onWrong: () => void;
}

export const OpenEndedQuestion = ({ question, onCorrect, onWrong }: Props) => {
  const [input, setInput] = useState('');

  const mode = useSelector((state: State) => state.theme.mode);
  const styles = styling(theming(mode));

  const onButtonPress = () => {
    if (question.answer?.toLowerCase().trim().includes(input.toLowerCase().trim())) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Переведите это предложение</Text>

      <View style={styles.row}>
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        {!input && <Text style={styles.placeholder}>Напишите на бурятском</Text>}
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
          textAlignVertical='top'
          multiline
          keyboardAppearance={mode || 'default'}
          autoCorrect={false}
        />
      </View>

      <Button label='Проверить' onPress={onButtonPress} disabled={!input} className={styles.button} />
    </View>
  );
};


const styling = (theme: Theming) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.l
  },
  title: {
    marginTop: theme.spacing.s,
    color: theme.colors.text,
    fontFamily: 'bold',
    fontSize: 18
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',

    marginTop: theme.spacing.l,
  },
  sentenceContainer: {
    borderBottomWidth: 2,
    borderColor: theme.colors.secondaryText,
    paddingBottom: theme.spacing.xs,
    paddingRight: 40
  },
  sentence: {
    fontFamily: 'medium',
    fontSize: 18,
    color: theme.colors.secondaryText
  },
  inputContainer: {
    marginTop: 40,
    position: 'relative',
    height: 180,
    borderWidth: 2,
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondaryText,
    borderRadius: 12,
    shadowOffset: {
      height: 8,
      width: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowColor: '#040844',
    elevation: 3,
  },
  input: {
    flex: 1,
    fontFamily: 'regular',
    fontSize: 20,
    color: theme.colors.text,
    paddingTop: 16,
    paddingLeft: 16
  },
  placeholder: {
    position: 'absolute',
    left: 16,
    top: 16,
    fontFamily: 'regular',
    fontSize: 20,
    color: '#9F9F9F',
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 32,
    backgroundColor: theme.colors.accent,
    borderRadius: 12,
    paddingHorizontal: 80,
    ...theme.shadows.basicShadow
  },
});
