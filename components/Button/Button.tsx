import React from 'react'
import { Octicons } from '@expo/vector-icons'
import OcticonsIcons from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Octicons.json'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'

import { Theming, theming } from '../../utils/theme'
import { useSelector } from 'react-redux'
import { State } from '../../store/store'

type Props = {
  label: string;
  view: 'action' | 'default' | 'ghost';
  icon?: keyof typeof OcticonsIcons;
  onPress?: () => void;
  className: StyleProp<ViewStyle>
}

export const Button: React.FC<Props> = ({ onPress, label, view, icon, className }) => {
  const theme = useSelector((state: State) => theming(state.theme.mode));
  const styles = styling(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles[view], className]}
    >
      {icon && <Octicons name={icon} size={24} color={theme.colors.secondary} />}
      <Text style={[styles.buttonLabel, ...view === 'ghost' ? [styles.ghost] : []]}>{label}</Text>
    </TouchableOpacity>
  )
}


const styling = (theme: Theming) => StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    ...theme.shadows.basicShadow
  },
  buttonLabel: {
    fontFamily: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    color: theme.colors.secondary,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
  },
  default: {
    backgroundColor: theme.colors.secondaryText,
  },
  action: {
    backgroundColor: theme.colors.accent,
  },
  ghost: {
    color: theme.colors.accentText,
    borderWidth: 0,
    shadowColor: 'transparent'
  }
})