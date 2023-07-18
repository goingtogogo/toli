import React from "react";
import { Image, Text, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { State } from "../../../../../../store/store";
import { Theming, theming } from "../../../../../../utils/theme";

type Props = {
  image: string;
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

export const ImageOption = ({ image, text, isSelected, onPress }: Props) => {
  const mode = useSelector((state: State) => state.theme.mode);
  const styles = styling(theming(mode));

  return (<Pressable
    onPress={onPress}
    style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
  >
    <Image
      source={{
        uri: image,
      }}
      resizeMode="contain"
      style={styles.optionImage}
    />
    <Text style={isSelected ? styles.selectedText : styles.optionText}>
      {text}
    </Text>
  </Pressable>)
};

const styling = (theme: Theming) => StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderColor: theme.colors.text,
    borderRadius: 10,

    width: '48%',
    height: '48%',

    padding: 10,

    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: theme.colors.text,
    borderColor: theme.colors.accentText,
  },
  optionImage: {
    width: '100%',
    flex: 1,
  },
  optionText: {
    fontFamily: 'bold',
    color: theme.colors.secondaryText
  },
  selectedText: {
    fontFamily: 'bold',
    color: theme.colors.background,
  },
});