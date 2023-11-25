import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Theming, theming } from '../../../../../../utils/theme';
import { State } from '../../../../../../store/store';


type Props = {
  text: string;
  onPress: () => void;
  isSelected?: boolean
}

export const WordOption = ({ text, onPress, isSelected }: Props) => {
  const mode = useSelector((state: State) => state.theme.mode);
  const styles = styling(theming(mode), isSelected);

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
    >
      <Text
        style={styles.text}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styling = (theme: Theming, isSelected?: boolean) => StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    backgroundColor: isSelected ? theme.colors.secondary : theme.colors.secondaryText,
    borderRadius: 12,
    ...theme.shadows.basicShadow,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'medium',
    color: isSelected ? theme.colors.text : theme.colors.background,
    fontSize: 16
  },
});
