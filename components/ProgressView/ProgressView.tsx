import React, { useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type Props = {
  progress: number
}

export const ProgressView: React.FC<Props> = React.memo(({ progress }) => {
  const mode = useSelector((state: State) => state.theme.mode)
  const styles = styling(theming(mode))

  const progressAnim = useRef(new Animated.Value(0)).current

  Animated.timing(progressAnim, {
    toValue: progress,
    duration: 500,
    useNativeDriver: false,
  }).start()

  return (
    <View style={styles.progressBar}>
      <Animated.View
        style={[
          styles.progress,
          {
            width: progressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </View>
  )
})

const styling = (theme: Theming) =>
  StyleSheet.create({
    progressBar: {
      height: 8,
      backgroundColor: theme.colors.secondaryText,
    },
    progress: {
      height: 8,
      backgroundColor: theme.colors.accent,
    },
  })

ProgressView.displayName = 'ProgressView'
