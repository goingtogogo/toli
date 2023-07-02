import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageOption } from './ImageOption/ImageOption';
import { Button } from '../../../../../components/Button/Button';
import { Question } from '../../Quiz';

type Props = {
  question: Question;
  onCorrect: () => void;
  onWrong: () => void;
}

export const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }: Props) => {
  const [selected, setSelected] = useState<{ correct: false, id: string } | null>(null);

  const onButtonPress = () => {
    if (selected?.correct) {
      onCorrect();

      setSelected(null);
    } else {
      onWrong();
    }
  };

  return (
    <>
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

      <Button label='Check' onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch',
  },

  optionsContainer: {
    width: '100%',
    flex: 1,

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
});