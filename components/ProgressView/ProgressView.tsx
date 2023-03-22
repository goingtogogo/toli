import React, { useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

import { theme } from '../../utils/theme'


type Props = {
  progress: number;
}

export const ProgressView: React.FC<Props> = React.memo(({ progress }) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  Animated.timing(progressAnim, {
    toValue: progress,
    duration: 500,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.progressBar}>
      <Animated.View style={[styles.progress, {
        width: progressAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
          extrapolate: 'clamp',
        })
      }]} />
    </View>

  )
})


const styles = StyleSheet.create({
  progressBar: {
    height: 8,
    backgroundColor: theme.colors.secondaryText
  },
  progress: {
    height: 8,
    backgroundColor: theme.colors.accent
  }
})