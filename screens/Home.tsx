
import React from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../App';


type Props = {
  navigation: NativeStackNavigationProp<StackParamList, 'main'>
}

export function Home(props: Props) {
  return (
    <View style={styles.container}>
      <Text>home screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
