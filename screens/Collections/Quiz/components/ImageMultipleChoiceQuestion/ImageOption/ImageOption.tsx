import React from "react";
import { Image, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  image: string;
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

export const ImageOption = ({ image, text, isSelected, onPress }: Props) => (
  <Pressable
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
  </Pressable>
);

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,

    width: "48%",
    height: "48%",

    padding: 10,

    alignItems: "center",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "bold",
    color: "black",
  },
  selectedText: {
    fontWeight: "bold",
    color: "#40BEF7",
  },
});