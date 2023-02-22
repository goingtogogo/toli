import React from 'react'
import { Octicons } from '@expo/vector-icons'
import OcticonsIcons from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Octicons.json'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { theme } from '../../utils/theme'

type Props = {
    name: keyof typeof OcticonsIcons;
    onPress?: () => void;
    size?: number
}

export const ActionButton: React.FC<Props> = ({ onPress, name, size = 20 }) => {
    return (
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
            <Octicons name={name} size={size} color={theme.colors.secondary} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    iconContainer: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.accent,
        borderRadius: 8,
        shadowOffset: {
            height: 4,
            width: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowColor: '#eb6b84',
    }
})