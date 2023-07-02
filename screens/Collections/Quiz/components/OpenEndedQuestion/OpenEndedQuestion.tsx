import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from '../../../../../components/Button/Button';
import { Question } from '../../Quiz';

type Props = {
  question: Question;
  onCorrect: () => void;
  onWrong: () => void;
}

export const OpenEndedQuestion = ({ question, onCorrect, onWrong }: Props) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput('');
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>

      <View style={styles.row}>
        {/* Image */}

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      {/* Sentence container */}
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder='Type in English'
        style={styles.textInput}
        textAlignVertical='top'
        multiline
      />

      <Button label='Check' onPress={onButtonPress} disabled={!input} />
    </>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',

    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: '30%',
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,

    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    alignSelf: 'stretch',
    flex: 1,

    backgroundColor: '#ebebeb',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,

    padding: 10,
    fontSize: 16,
  },
});
